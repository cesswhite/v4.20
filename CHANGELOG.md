# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.2] - 2026-02-24

### Added

- `cli/themeColors.ts` as single source of truth for primary/neutral color options and defaults in the CLI.

### Changed

- CLI now imports `PRIMARY_COLORS`, `GRAYSCALE_COLORS`, `DEFAULT_PRIMARY`, and `DEFAULT_NEUTRAL` from `themeColors.ts` instead of defining them inline.
- Gray/neutral options in the CLI prompt now match the app: slate, gray, zinc, neutral, stone, mauve, olive, mist, taupe.
- Primary color list order aligned with the template (rose first).

### Fixed

- Gray color selector in the CLI previously showed only 5 options; it now shows all 9 neutral palettes supported by the template.
