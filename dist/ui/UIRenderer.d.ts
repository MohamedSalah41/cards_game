import { Card } from "../models/Card.js";
export declare class UIRenderer {
    private boardEl;
    private progressBarEl;
    private progressTextEl;
    private winBannerEl;
    constructor();
    renderBoard(cards: Card[], onClick: (id: number) => void): void;
    updateProgress(percent: number): void;
    showWin(): void;
    private getEl;
}
//# sourceMappingURL=UIRenderer.d.ts.map