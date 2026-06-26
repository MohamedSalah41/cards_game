import { Card } from "../models/Card.js";

/**
 * UIRenderer — owns all DOM manipulation.
 * Keeps the controller free of HTML concerns.
 */
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

  /**
   * Clears the board, renders all cards and attaches click listeners.
   */
  renderBoard(cards: Card[], onClick: (id: number) => void): void {
    this.boardEl.innerHTML = "";
    this.winBannerEl.classList.add("hidden");

    cards.forEach((card) => {
      const el = card.render(this.boardEl);
      el.addEventListener("click", () => onClick(card.id));
    });
  }

  /** Updates the progress bar width and text label. */
  updateProgress(percent: number): void {
    this.progressBarEl.style.width = `${percent}%`;
    this.progressTextEl.textContent = `${percent}%`;
  }

  /** Shows the win overlay. */
  showWin(): void {
    this.winBannerEl.classList.remove("hidden");
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private getEl(id: string): HTMLElement {
    const el = document.getElementById(id);
    if (!el) throw new Error(`UIRenderer: element #${id} not found in DOM.`);
    return el;
  }
}
