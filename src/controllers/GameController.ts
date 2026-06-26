import { IGame } from "../interfaces/IGame.js";
import { IAudioManager } from "../interfaces/IAudioManager.js";
import { IProgressTracker } from "../interfaces/IProgressTracker.js";
import { Card } from "../models/Card.js";
import { createShuffledCards } from "../utils/cardFactory.js";
import { UIRenderer } from "../ui/UIRenderer.js";

const FLIP_REVEAL_DELAY = 1000;

export class GameController implements IGame {
  private cards: Card[] = [];
  private flippedCards: Card[] = [];
  private isLocked: boolean = false;

  constructor(
    private readonly audio: IAudioManager,
    private readonly tracker: IProgressTracker,
    private readonly ui: UIRenderer
  ) {}

  start(): void {
    this.cards = createShuffledCards();
    this.flippedCards = [];
    this.isLocked = false;
    this.tracker.reset();
    this.ui.renderBoard(this.cards, (id) => this.onCardClick(id));
    this.ui.updateProgress(this.tracker.progressPercent);
    this.audio.playBackground();
  }

  restart(): void {
    this.audio.stopBackground();
    this.start();
  }

  onCardClick(cardId: number): void {
    if (this.isLocked) return;

    const card = this.cards.find((c) => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    card.flip();
    card.updateDOM();
    this.audio.playFlip();
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.isLocked = true;
      this.evaluate();
    }
  }

  private evaluate(): void {
    const [first, second] = this.flippedCards as [Card, Card];

    if (first.pairId === second.pairId) {
      this.handleMatch(first, second);
    } else {
      this.handleMismatch(first, second);
    }
  }

  private handleMatch(a: Card, b: Card): void {
    a.markMatched();
    b.markMatched();
    a.updateDOM();
    b.updateDOM();
    this.audio.playMatch();

    this.tracker.increment();
    this.ui.updateProgress(this.tracker.progressPercent);
    this.flippedCards = [];
    this.isLocked = false;

    if (this.tracker.matchedPairs === this.tracker.totalPairs) {
      this.audio.stopBackground();
      setTimeout(() => this.ui.showWin(), 400);
    }
  }

  private handleMismatch(a: Card, b: Card): void {
    this.audio.playMismatch();

    setTimeout(() => {
      a.unflip();
      b.unflip();
      a.updateDOM();
      b.updateDOM();
      this.flippedCards = [];
      this.isLocked = false;
    }, FLIP_REVEAL_DELAY);
  }
}
