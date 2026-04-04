import type { Character } from "./types";

declare global {
    interface Window {
        character: Character;
    }
}
