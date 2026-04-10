# Changelog

## [Unreleased]

## [0.5.0] - 2026-04-10

### Fixed
- VS Code tasks shell not finding `nvm`-managed binaries
- `Package & Install VSIX` task failing due to shell substitution intercepted by VS Code

### Changed
- Updated dependencies: `@types/node` 25.x, `@types/vscode` 1.115.0, `typescript` 6.x, `ovsx` 0.10.10
- `engines.vscode` bumped to `^1.115.0`


## [0.4.0] - 2026-04-02

### Updated
- Update default white colors

## [0.3.0] - 2026-04-01

### Added
- VS Code task **"Package & Install VSIX"**: compiles, packages and installs the extension in one step

## [0.2.0] - 2026-03-17

### Added
- CI pipeline on pull requests: runs tests, checks version bump and CHANGELOG update
- CI pipeline on main: packages extension, creates GitHub release, publishes to Open VSX

## [0.1.0] - 2026-03-17

### Added
- Deterministic color generation from workspace folder name
- Applies color to title bar and activity bar on startup
- Skips if `workbench.colorCustomizations` is already defined in `.vscode/settings.json`
- Skips gracefully if `.vscode/settings.json` is malformed
- Output channel **AutoColor** logs what happened on each activation
