export interface IGame {
  start(): void;
  restart(): void;
  onCardClick(cardId: number): void;
}
