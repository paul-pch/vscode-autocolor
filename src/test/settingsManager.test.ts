import * as assert from 'assert';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as vscode from 'vscode';
import { applyColorIfAbsent } from '../settingsManager';

suite('SettingsManager Test Suite', () => {
    let tmpDir: string;

    setup(() => {
        tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'autocolor-test-'));
    });

    teardown(() => {
        fs.rmSync(tmpDir, { recursive: true, force: true });
    });

    function settingsPath(): string {
        return path.join(tmpDir, '.vscode', 'settings.json');
    }

    function readSettings(): Record<string, unknown> {
        return JSON.parse(fs.readFileSync(settingsPath(), 'utf8'));
    }

    test('ShouldCreateSettingsFileWithColor', () => {
        const applied = applyColorIfAbsent(vscode.Uri.file(tmpDir), '#123456');

        assert.strictEqual(applied, true);
        assert.ok(fs.existsSync(settingsPath()));
        const colors = readSettings()['workbench.colorCustomizations'] as Record<string, string>;
        assert.strictEqual(colors['titleBar.activeBackground'], '#123456');
    });

    test('ShouldSkipIfColorCustomizationsAlreadyDefined', () => {
        fs.mkdirSync(path.join(tmpDir, '.vscode'), { recursive: true });
        fs.writeFileSync(settingsPath(), JSON.stringify({
            'workbench.colorCustomizations': { 'titleBar.activeBackground': '#ffffff' }
        }), 'utf8');

        const applied = applyColorIfAbsent(vscode.Uri.file(tmpDir), '#123456');

        assert.strictEqual(applied, false);
        const colors = readSettings()['workbench.colorCustomizations'] as Record<string, string>;
        assert.strictEqual(colors['titleBar.activeBackground'], '#ffffff');
    });

    test('ShouldPreserveExistingSettingsWhenApplyingColor', () => {
        fs.mkdirSync(path.join(tmpDir, '.vscode'), { recursive: true });
        fs.writeFileSync(settingsPath(), JSON.stringify({ 'editor.fontSize': 14 }), 'utf8');

        applyColorIfAbsent(vscode.Uri.file(tmpDir), '#abcdef');

        const settings = readSettings();
        assert.strictEqual(settings['editor.fontSize'], 14);
        assert.ok(settings['workbench.colorCustomizations']);
    });

    test('ShouldSkipIfSettingsJsonIsMalformed', () => {
        fs.mkdirSync(path.join(tmpDir, '.vscode'), { recursive: true });
        fs.writeFileSync(settingsPath(), '{ not valid json', 'utf8');

        const applied = applyColorIfAbsent(vscode.Uri.file(tmpDir), '#123456');

        assert.strictEqual(applied, false);
        assert.strictEqual(fs.readFileSync(settingsPath(), 'utf8'), '{ not valid json');
    });

    test('ShouldCreateVscodeDirIfAbsent', () => {
        assert.ok(!fs.existsSync(path.join(tmpDir, '.vscode')));

        applyColorIfAbsent(vscode.Uri.file(tmpDir), '#123456');

        assert.ok(fs.existsSync(path.join(tmpDir, '.vscode')));
    });
});
