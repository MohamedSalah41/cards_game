import { IGame } from "../interfaces/IGame.js";
import { IAudioManager } from "../interfaces/IAudioManager.js";
import { IProgressTracker } from "../interfaces/IProgressTracker.js";
import { UIRenderer } from "../ui/UIRenderer.js";
/**
 * GameController — orchestrates all game logic.
 * Implements IGame and wires together cards, audio, progress and UI.
 */
export declare class GameController implements IGame {
    private readonly audio;
    private readonly tracker;
    private readonly ui;
    private cards;
    private flippedCards;
    private isLocked;
    constructor(audio: IAudioManager, tracker: IProgressTracker, ui: UIRenderer);
    start(): void;
    restart(): void;
    onCardClick(cardId: number): void;
    private evaluate;
    private handleMatch;
    private handleMismatch;
}
//# sourceMappingURL=GameController.d.ts.map