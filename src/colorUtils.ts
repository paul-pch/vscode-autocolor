export function hashToColor(name: string): { color: string, lightness: number }{
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
        hash |= 0; // force 32bit integer
    }

    const hue = Math.abs(hash) % 360;
    const saturation = 60;
    const lightness = 25 + (Math.abs(hash >> 8) % 20); // between 25% and 45%

    return { color: hslToHex(hue, saturation, lightness), lightness: lightness };
}

export function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0');
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}
