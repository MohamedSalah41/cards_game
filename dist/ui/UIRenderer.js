export class UIRenderer {
    constructor() {
        this.boardEl = this.getEl("game-board");
        this.progressBarEl = this.getEl("progress-bar__fill");
        this.progressTextEl = this.getEl("progress-text");
        this.winBannerEl = this.getEl("win-banner");
    }
    renderBoard(cards, onClick) {
        this.boardEl.innerHTML = "";
        this.winBannerEl.classList.add("hidden");
        cards.forEach((card) => {
            const el = card.render(this.boardEl);
            el.addEventListener("click", () => onClick(card.id));
        });
    }
    updateProgress(percent) {
        this.progressBarEl.style.width = `${percent}%`;
        this.progressTextEl.textContent = `${percent}%`;
    }
    showWin() {
        this.winBannerEl.classList.remove("hidden");
    }
    getEl(id) {
        const el = document.getElementById(id);
        if (!el)
            throw new Error(`UIRenderer: element #${id} not found in DOM.`);
        return el;
    }
}
//# sourceMappingURL=UIRenderer.js.map