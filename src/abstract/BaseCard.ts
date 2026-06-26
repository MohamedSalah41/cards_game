import { ICard } from "../interfaces/ICard.js";

/**
 * BaseCard — abstract class that enforces ICard structure
 * and provides shared flip/match state logic.
 * Concrete subclasses decide how they are rendered.
 */
export abstract class BaseCard implements ICard {
  public isFlipped: boolean = false;
  public isMatched: boolean = false;

  constructor(
    public readonly id: number,
    public readonly pairId: number,
    public readonly frontImage: string,
    public readonly backImage: string
  ) {}

  /** Flip the card face-up. */
  flip(): void {
    if (!this.isMatched) {
      this.isFlipped = true;
    }
  }

  /** Flip back face-down. */
  unflip(): void {
    if (!this.isMatched) {
      this.isFlipped = false;
    }
  }

  /** Lock card permanently as matched. */
  markMatched(): void {
    this.isMatched = true;
    this.isFlipped = true;
  }

  /**
   * Render this card into the DOM.
   * Each subclass provides its own rendering strategy.
   */
  abstract render(container: HTMLElement): HTMLElement;
}
