import { Card } from "../models/Card.js";
/**
 * UIRenderer — owns all DOM manipulation.
 * Keeps the controller free of HTML concerns.
 */
export declare class UIRenderer {
    private boardEl;
    private progressBarEl;
    private progressTextEl;
    private winBannerEl;
    constructor();
    /**
     * Clears the board, renders all cards and attaches click listeners.
     */
    renderBoard(cards: Card[], onClick: (id: number) => void): void;
    /** Updates the progress bar width and text label. */
    updateProgress(percent: number): void;
    /** Shows the win overlay. */
    showWin(): void;
    private getEl;
}
//# sourceMappingURL=UIRenderer.d.ts.map