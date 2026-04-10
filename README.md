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

Search **AutoColor** in the [Open VSX Registry](https://open-vsx.org/extension/paul-pch/autocolor) or install manually.

**Via VS Code task:**

Open the Command Palette (`Ctrl+Shift+P`) → `Tasks: Run Task` → **Package & Install VSIX**. This builds the extension and installs it in one step.

**Manually:**

```bash
npm run package
```

Then in VS Code: `Extensions > ··· > Install from VSIX` and select `extension.vsix`.

## Development

```bash
npm install
npm test
```

### Next features

- [ ] M - Ajouter une commande pour forcer le reset des couleurs
- [ ] L - Ajouter de la CI pour montées de version automatiques
- [ ] L - Forcer une couleur à partir d'un favico si prédéfini
- [ ] M - Optimiser les foreground blancs ou noir en fonction de la teinte
- [ ] S - Pousser sur marketplace vscode


## Contributing

Every pull request targeting `main` must:
- bump the version in `package.json`
- update `CHANGELOG.md`

On merge, a release is automatically created on GitHub and published to Open VSX.
