/**
 * IGame — contract that every game controller must satisfy.
 */
export interface IGame {
    start(): void;
    restart(): void;
    onCardClick(cardId: number): void;
}
//# sourceMappingURL=IGame.d.ts.map