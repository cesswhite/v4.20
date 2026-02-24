#!/usr/bin/env bun
/// <reference types="bun-types" />

import { DEFAULT_NEUTRAL, DEFAULT_PRIMARY, GRAYSCALE_COLORS, PRIMARY_COLORS } from './themeColors'

type ColorsConfig = {
  primary: string
  neutral: string
}

type CliOptions = {
  projectName?: string
  repo?: string
  branch?: string
  keepGit?: boolean
}

const EXCLUDED_DIRS = new Set([
  'node_modules',
  '.git',
  '.nuxt',
  '.output',
  '.turbo',
  'dist',
  'dist-ssr',
  'cli'
])

const DEFAULT_REPO_URL = 'https://github.com/cesswhite/v420.git'

function joinPath(...parts: string[]): string {
  return parts.join('/').replace(/\/+/g, '/')
}

function resolvePath(...parts: string[]): string {
  const joined = joinPath(...parts)
  if (joined.startsWith('/')) {
    return joined
  }
  return joinPath(process.cwd(), joined)
}

async function ask(question: string, defaultValue?: string): Promise<string> {
  const suffix = defaultValue ? ` (${defaultValue})` : ''
  process.stdout.write(`${question}${suffix}: `)
  
  return new Promise((resolve) => {
    const handler = (data: Buffer) => {
      process.stdin.removeListener('data', handler)
      const input = data.toString().trim()
      resolve(input || defaultValue || '')
    }
    process.stdin.setRawMode?.(false)
    process.stdin.resume()
    process.stdin.once('data', handler)
  })
}

function clearLine() {
  process.stdout.write('\r\x1b[K')
}

function moveCursorUp(lines: number) {
  process.stdout.write(`\x1b[${lines}A`)
}

function moveCursorDown(lines: number) {
  process.stdout.write(`\x1b[${lines}B`)
}

async function selectFromList(options: string[], prompt: string, defaultValue?: string): Promise<string> {
  let selectedIndex = defaultValue ? options.indexOf(defaultValue) : 0
  if (selectedIndex === -1) selectedIndex = 0

  const wasRawMode = process.stdin.isRaw || false
  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdout.write('\x1b[?25l')

  const totalLines = options.length + 1
  
  const render = () => {
    process.stdout.write(`${prompt}\n`)
    options.forEach((option, index) => {
      const marker = index === selectedIndex ? '❯' : ' '
      const highlight = index === selectedIndex ? '\x1b[36m' : '\x1b[0m'
      process.stdout.write(`${highlight}${marker} ${option}\x1b[0m\n`)
    })
  }

  const clearAndRender = () => {
    moveCursorUp(totalLines)
    for (let i = 0; i < totalLines; i++) {
      clearLine()
      if (i < totalLines - 1) {
        moveCursorDown(1)
      }
    }
    moveCursorUp(totalLines - 1)
    render()
  }

  render()
  
  return new Promise((resolve) => {
    const onData = (data: Buffer) => {
      const str = data.toString()
      
      if (str === '\x03') {
        process.stdout.write('\x1b[?25h')
        process.exit(0)
      }

      if (str === '\x1b[A' && selectedIndex > 0) {
        selectedIndex--
        clearAndRender()
      } else if (str === '\x1b[B' && selectedIndex < options.length - 1) {
        selectedIndex++
        clearAndRender()
      } else if (str === '\r' || str === '\n') {
        process.stdin.setRawMode(wasRawMode)
        process.stdin.removeListener('data', onData)
        process.stdout.write('\x1b[?25h')
        moveCursorUp(totalLines)
        for (let i = 0; i < totalLines; i++) {
          clearLine()
          if (i < totalLines - 1) {
            moveCursorDown(1)
          }
        }
        moveCursorUp(totalLines - 1)
        clearLine()
        process.stdout.write(`${prompt} \x1b[36m${options[selectedIndex]}\x1b[0m\n`)
        resolve(options[selectedIndex])
      }
    }

    process.stdin.on('data', onData)
  })
}

async function pathExists(target: string): Promise<boolean> {
  try {
    const fs = await import('fs/promises')
    await fs.access(target)
    return true
  } catch {
    return false
  }
}

async function ensureEmptyDir(dir: string) {
  const exists = await pathExists(dir)

  if (!exists) {
    try {
      await Bun.$`mkdir -p ${dir}`.quiet()
    } catch {
      // Ignore
    }
    return
  }

  const fs = await import('fs/promises')
  const entries = await fs.readdir(dir)
  if (entries.length > 0) {
    throw new Error(
      `Destination folder "${dir}" is not empty. Choose a different name or an empty folder.`
    )
  }
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = {}

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]

    if (arg === '--help' || arg === '-h') {
      console.log(`
v420 - Nuxt template generator

Usage:
  v420 [projectName] [--repo <url>] [--branch <name>] [--keep-git]

Environment:
  V420_TEMPLATE_REPO     Override default repo URL
  V420_TEMPLATE_BRANCH   Override default branch
`)
      process.exit(0)
    }

    if (!arg.startsWith('-') && !options.projectName) {
      options.projectName = arg
      continue
    }

    if (arg === '--repo') {
      options.repo = argv[i + 1]
      i++
      continue
    }

    if (arg === '--branch') {
      options.branch = argv[i + 1]
      i++
      continue
    }

    if (arg === '--keep-git') {
      options.keepGit = true
      continue
    }
  }

  return options
}

function sanitizeProjectName(input: string): string {
  const trimmed = input.trim()
  if (!trimmed) return 'v420-app'
  return trimmed.replace(/\s+/g, '-')
}

async function gitCloneRepo(params: { repoUrl: string; branch?: string; targetDir: string }) {
  const { repoUrl, branch, targetDir } = params
  const chosenBranch = branch?.trim() ? branch.trim() : undefined

  try {
    if (chosenBranch) {
      await Bun.$`git clone --depth 1 --branch ${chosenBranch} ${repoUrl} ${targetDir}`
    } else {
      await Bun.$`git clone --depth 1 ${repoUrl} ${targetDir}`
    }
  } catch (e) {
    throw new Error(
      `Failed to clone template repo. Make sure "git" is installed and you have network access.\n` +
      `Repo: ${repoUrl}${chosenBranch ? ` (branch: ${chosenBranch})` : ''}\n` +
      `Destination: ${targetDir}\n` +
      `Original error: ${e instanceof Error ? e.message : String(e)}`
    )
  }
}

async function removeGitDir(targetDir: string) {
  const gitDir = joinPath(targetDir, '.git')
  if (!(await pathExists(gitDir))) return

  try {
    await Bun.$`rm -rf ${gitDir}`.quiet()
  } catch {
    // Ignore
  }
}

async function copyDir(source: string, destination: string) {
  try {
    await Bun.$`mkdir -p ${destination}`.quiet()
  } catch {
    // Ignore
  }

  const fs = await import('fs/promises')
  const entries = await fs.readdir(source, { withFileTypes: true })

  for (const entry of entries) {
    const entryName = entry.name
    
    if (EXCLUDED_DIRS.has(entryName)) {
      continue
    }

    const sourcePath = joinPath(source, entryName)
    const destinationPath = joinPath(destination, entryName)

    if (entry.isDirectory()) {
      await copyDir(sourcePath, destinationPath)
    } else if (entry.isFile()) {
      const content = await Bun.file(sourcePath).arrayBuffer()
      await Bun.write(destinationPath, content)
    }
  }
}

async function updateAppConfigColors(
  targetDir: string,
  { primary, neutral }: ColorsConfig
) {
  const appConfigPath = joinPath(targetDir, 'app', 'app.config.ts')

  const exists = await pathExists(appConfigPath)
  if (!exists) {
    console.log(`   Warning: ${appConfigPath} not found`)
    const fs = await import('fs/promises')
    try {
      const files = await fs.readdir(joinPath(targetDir, 'app'))
      console.log(`   Files in app dir: ${files.join(', ')}`)
    } catch (e) {
      console.log(`   Error reading app dir: ${e}`)
    }
    return
  }

  const file = Bun.file(appConfigPath)
  const content = await file.text()

  let updated = content
  updated = updated.replace(/(primary:\s*)'[^']*'/, `$1'${primary}'`)
  updated = updated.replace(/(neutral:\s*)'[^']*'/, `$1'${neutral}'`)

  if (updated === content) {
    console.log(`   Warning: No changes detected in ${appConfigPath}`)
    console.log(`   Content: ${content.substring(0, 100)}...`)
  }

  await Bun.write(appConfigPath, updated)
}

async function updatePackageName(targetDir: string, projectName: string) {
  const pkgPath = joinPath(targetDir, 'package.json')

  const exists = await pathExists(pkgPath)
  if (!exists) {
    return
  }

  const file = Bun.file(pkgPath)
  const raw = await file.text()
  const pkg = JSON.parse(raw) as { name?: string }

  pkg.name = projectName

  await Bun.write(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
}

async function main() {
  console.log('🌿 Welcome to v420 template generator 🌿 \n')

  const options = parseArgs(process.argv.slice(2))
  const projectName = options.projectName
    ? sanitizeProjectName(options.projectName)
    : sanitizeProjectName(await ask('Project name', 'v420-app'))
  
  const primary = await selectFromList([...PRIMARY_COLORS], 'Select primary color:', DEFAULT_PRIMARY)
  const neutral = await selectFromList([...GRAYSCALE_COLORS], 'Select gray/neutral color:', DEFAULT_NEUTRAL)
  
  const targetDir = resolvePath(projectName)
  const repoUrl = (options.repo || process.env.V420_TEMPLATE_REPO || DEFAULT_REPO_URL).trim()
  const branch = (options.branch || process.env.V420_TEMPLATE_BRANCH || '').trim()

  await ensureEmptyDir(targetDir)

  console.log(`\n   Creating project at: ${targetDir}`)
  console.log(`   Cloning template from: ${repoUrl}${branch ? ` (branch: ${branch})` : ''}`)
  await gitCloneRepo({ repoUrl, branch, targetDir })
  if (!options.keepGit) {
    await removeGitDir(targetDir)
  }
  

  console.log('   Applying selected colors...')
  await updateAppConfigColors(targetDir, { primary, neutral })

  await updatePackageName(targetDir, projectName)

  console.log('\nProject created successfully 🚀')
  console.log('\nNext steps:')
  console.log(`cd ${projectName} && bun i && bun dev`)
  
  process.exit(0)
}

main().catch((error) => {
  console.error('\n❌ Error creating project:')
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})


