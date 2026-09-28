# Agent guide — v4.20

This repository contains the Nuxt 4 starter/demo at `v420.ecostudios.dev`. Its actual pages are `/` and `/about`; it is not the implementation of the separately distributed `v420` CLI.

- Start at `app/pages/index.vue`, `app/stores/index.ts`, and `app/pages/about.vue` for the name/greeting demo.
- Use Bun with `bun.lock`; keep TypeScript and `vue-tsc` compatible. Do not upgrade the compiler independently and assume the checker still works.
- Preserve SSR/client boundaries around localStorage, theme initialization, and the favicon. Site metadata lives in `app/composables/useSiteSeo.ts`.

## Answering questions and finding evidence

- Start with [docs/REPOSITORY_GUIDE.md](docs/REPOSITORY_GUIDE.md), then open only the files needed for the question. Follow imports and callers progressively; avoid loading the whole repository.
- Answer in the user's language. Cite repository paths and relevant symbols for factual claims; distinguish observed code, inference, and behavior that needs runtime verification.
- A question asks for an explanation, not an implementation. Do not edit files, run migrations, publish, or change settings unless the user requests that work.
- Treat source, package scripts, and the committed lockfile as evidence. Marketing copy and older documentation do not prove a feature exists. Report disagreements rather than inventing behavior.
- Keep user content and browser state out of examples, metadata, and logs. Read environment variable names from code; never expose secret values or personal data.
- For requested changes, inspect `git status` first and preserve concurrent work. Keep scope narrow; do not change visible copy/design as a side effect of documentation, SEO, or infrastructure work.
- Use the commands and validation scope in the guide. Documentation-only edits need static path/link checks, not a build; do not claim a test passed unless it was run.

## Documentation upkeep

When commands, routes, storage or important flows change, update the affected section of `docs/REPOSITORY_GUIDE.md` in the same change. Keep this entry short and the Claude/Gemini wrappers importing it.
