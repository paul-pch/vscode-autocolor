import * as assert from 'assert';
import { hashToColor, hslToHex } from '../colorUtils';

suite('ColorUtils Test Suite', () => {
    test('TestHashColorShouldReturnSameOutput', () => {
        
        let name1 = "afirstfoldername";
        let hash1 = hashToColor(name1);
        let hash2 = hashToColor(name1);
        assert.strictEqual(hash1.color, hash2.color);
        assert.strictEqual(hash1.lightness, hash2.lightness);

        let name2 = "an-other-foldername";
        let hash3 = hashToColor(name2);
        let hash4 = hashToColor(name2);
        assert.strictEqual(hash3.color, hash4.color);
        assert.strictEqual(hash3.lightness, hash4.lightness);
    });

    test('TestHashColorShouldReturnSpecificOutput', () => {
        let hash = hashToColor("afirstfoldername1223é@");
        assert.strictEqual(hash.color, "#af5e2c");
    });

    test('TestHashColorShouldReturnHexaColor', () => {
        let hash = hashToColor("afirstfoldername1223é@");
        assert.match(hash.color, /^#[0-9a-f]{6}$/i);
    });

    test('TestHashColorShouldReturnLightnessInRange', () => {
        const hash = hashToColor("afirstfoldername1223é@");
        assert.ok(hash.lightness >= 25 && hash.lightness <= 45);
    });
});
