# workspace-color

Extension VS Code qui applique automatiquement une couleur de bandeau basée sur le nom du dossier workspace.

## Comportement

- Calcule une couleur déterministe à partir du nom du dossier racine
- L'applique au statusBar et titleBar au démarrage
- Ne touche à rien si `workbench.colorCustomizations` est déjà défini dans `.vscode/settings.json`

## Installation

```bash
npm run package
```

Puis dans VS Code : `Extensions > ... > Install from VSIX`

## Développement

```bash
npm install
npm test
```
