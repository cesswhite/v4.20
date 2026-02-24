/**
 * Single source of truth for theme color options in the CLI.
 * Keep in sync with the template's app (e.g. SwitchPrimaryColor.vue and app.config.ts).
 */

export const PRIMARY_COLORS = [
  'rose', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink',
] as const

export const GRAYSCALE_COLORS = [
  'slate', 'gray', 'zinc', 'neutral', 'stone', 'mauve', 'olive', 'mist', 'taupe',
] as const

export const DEFAULT_PRIMARY = 'emerald'
export const DEFAULT_NEUTRAL = 'zinc'
