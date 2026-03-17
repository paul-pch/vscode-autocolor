import * as vscode from 'vscode';
import { hashToColor } from './colorUtils';
import { applyColorIfAbsent } from './settingsManager';

export function activate(context: vscode.ExtensionContext) {
    const folders = vscode.workspace.workspaceFolders;
    if (!folders || folders.length === 0) return;

    const folderName = folders[0].name;
    const hash = hashToColor(folderName);
    applyColorIfAbsent(folders[0].uri, hash.color);
}

export function deactivate() {}
