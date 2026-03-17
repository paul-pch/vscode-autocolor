# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

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
