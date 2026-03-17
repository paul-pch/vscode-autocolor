import * as vscode from 'vscode';
import { hashToColor } from './colorUtils';
import { applyColorIfAbsent } from './settingsManager';

export function activate(context: vscode.ExtensionContext) {
    const output = vscode.window.createOutputChannel('AutoColor');
    context.subscriptions.push(output);

    const folders = vscode.workspace.workspaceFolders;
    if (!folders || folders.length === 0) {
        output.appendLine('No workspace folder open — skipped.');
        return;
    }

    const folderName = folders[0].name;
    const { color } = hashToColor(folderName);
    const applied = applyColorIfAbsent(folders[0].uri, color);

    if (applied) {
        output.appendLine(`Applied color ${color} for workspace "${folderName}".`);
    } else {
        output.appendLine(`Skipped workspace "${folderName}": color customizations already defined or settings.json is malformed.`);
    }
}

export function deactivate() {}
