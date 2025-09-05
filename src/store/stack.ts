import { persistentAtom as atom } from "@nanostores/persistent";
import { type Stack } from "./../types";

export const $stack = atom<Stack>('html');

export const setStack = (stack:Stack) => {
    $stack.set(stack);
}