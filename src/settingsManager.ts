import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function applyColorIfAbsent(folderUri: vscode.Uri, color: string): boolean {
    const settingsPath = path.join(folderUri.fsPath, '.vscode', 'settings.json');
    const strongWhite = "#ffffff"
    const lowWhite = "#FCFBFE"
    const lowWhite2 = "#fbfafdb7"

    let settings: Record<string, any> = {};

    if (fs.existsSync(settingsPath)) {
        const raw = fs.readFileSync(settingsPath, 'utf8');
        try {
            settings = JSON.parse(raw);
        } catch {
            return false;
        }

        if (settings['workbench.colorCustomizations']) return false;
    }

    settings['workbench.colorCustomizations'] = {
        "titleBar.activeBackground": color,
        "titleBar.activeForeground": strongWhite,
        "titleBar.inactiveBackground": color,
        "titleBar.inactiveForeground": lowWhite,

        "activityBar.background": color,
        "activityBar.foreground": strongWhite,
        "activityBar.inactiveForeground": lowWhite2,
    };

    fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2), 'utf8');
    return true;
}
