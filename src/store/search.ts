import { atom } from "nanostores";

export const isOpen = atom<boolean>(false);

export const setIsOpen = () => {
    isOpen.set(!isOpen.get());
}