import { persistentAtom as atom } from "@nanostores/persistent";
import type {  Shade, Rounded, Palette, Theme } from "src/types";

export const $shade = atom<Shade>("shade", "900");
export const $rounded = atom<Rounded>("rounded", "large");
export const $palette = atom<Palette>("palette", "tls");
export const $theme = atom<Theme>("theme", "dark");

export const setShade = (shade: Shade) => {
    $shade.set(shade);
}

export const setRounded = (rounded: Rounded) => {
    $rounded.set(rounded);
}

export const setPalette = (palette: Palette) => {
    $palette.set(palette);
}

export const setTheme = (theme: Theme) => {
    $theme.set(theme)
}