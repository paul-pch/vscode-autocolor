import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function applyColorIfAbsent(folderUri: vscode.Uri, color: string): void {
    const settingsPath = path.join(folderUri.fsPath, '.vscode', 'settings.json');
    const strongWhite = "#FBFAFD"
    const lowWhite = "#FBFAFD"
    const lowWhite2 = "#fbfafd8f"

    let settings: Record<string, any> = {};

    if (fs.existsSync(settingsPath)) {
        const raw = fs.readFileSync(settingsPath, 'utf8');
        settings = JSON.parse(raw);

        if (settings['workbench.colorCustomizations']) return;
    }

    settings['workbench.colorCustomizations'] = {
        "titleBar.activeBackground": color,
        "titleBar.activeForeground": strongWhite,
        "titleBar.inactiveBackground": color,
        "titleBar.inactiveForeground": lowWhite,
        "activityBar.background": color,
        "activityBar.foreground": strongWhite,
        "activityBar.inactiveForeground": lowWhite2,
        // "statusBar.background": color,
        // "statusBar.foreground": lowWhite,
        // "statusBar.debuggingBackground": color,
        // "statusBar.debuggingForeground": lowWhite,
        // "statusBar.noFolderBackground": color,
        // "statusBar.noFolderForeground": lowWhite
    };

    fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2), 'utf8');
}
