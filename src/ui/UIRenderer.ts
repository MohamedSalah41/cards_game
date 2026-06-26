import { Card } from "../models/Card.js";

export class UIRenderer {
  private boardEl: HTMLElement;
  private progressBarEl: HTMLElement;
  private progressTextEl: HTMLElement;
  private winBannerEl: HTMLElement;

  constructor() {
    this.boardEl = this.getEl("game-board");
    this.progressBarEl = this.getEl("progress-bar__fill");
    this.progressTextEl = this.getEl("progress-text");
    this.winBannerEl = this.getEl("win-banner");
  }

  renderBoard(cards: Card[], onClick: (id: number) => void): void {
    this.boardEl.innerHTML = "";
    this.winBannerEl.classList.add("hidden");

    cards.forEach((card) => {
      const el = card.render(this.boardEl);
      el.addEventListener("click", () => onClick(card.id));
    });
  }

  updateProgress(percent: number): void {
    this.progressBarEl.style.width = `${percent}%`;
    this.progressTextEl.textContent = `${percent}%`;
  }

  showWin(): void {
    this.winBannerEl.classList.remove("hidden");
  }

  private getEl(id: string): HTMLElement {
    const el = document.getElementById(id);
    if (!el) throw new Error(`UIRenderer: element #${id} not found in DOM.`);
    return el;
  }
}
