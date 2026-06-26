import { ICard } from "../interfaces/ICard.js";

export abstract class BaseCard implements ICard {
  public isFlipped: boolean = false;
  public isMatched: boolean = false;

  constructor(
    public readonly id: number,
    public readonly pairId: number,
    public readonly frontImage: string,
    public readonly backImage: string
  ) {}

  flip(): void {
    if (!this.isMatched) {
      this.isFlipped = true;
    }
  }

  unflip(): void {
    if (!this.isMatched) {
      this.isFlipped = false;
    }
  }

  markMatched(): void {
    this.isMatched = true;
    this.isFlipped = true;
  }

  abstract render(container: HTMLElement): HTMLElement;
}
