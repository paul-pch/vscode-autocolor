<p align="center">
  <img src="images/logo.png" width="64" alt="AutoColor logo" />
</p>

<h1 align="center">AutoColor</h1>

<p align="center">Automatically assigns a unique color to each VS Code workspace based on its folder name, so you can instantly tell your windows apart.</p>

---

## How it works

- On startup, computes a deterministic color from the root folder name
- Applies it to the title bar and activity bar via `.vscode/settings.json`
- Does nothing if `workbench.colorCustomizations` is already defined
- Check the **Output** panel → **AutoColor** to see what happened

## Installation

Search **AutoColor** in the [Open VSX Registry](https://open-vsx.org/extension/paul-pch/autocolor) or install manually:

```bash
npm run package
```

Then in VS Code: `Extensions > ··· > Install from VSIX`

## Development

```bash
npm install
npm test
```

## Contributing

Every pull request targeting `main` must:
- bump the version in `package.json`
- update `CHANGELOG.md`

On merge, a release is automatically created on GitHub and published to Open VSX.
