import { ICard } from "../interfaces/ICard.js";
export declare abstract class BaseCard implements ICard {
    readonly id: number;
    readonly pairId: number;
    readonly frontImage: string;
    readonly backImage: string;
    isFlipped: boolean;
    isMatched: boolean;
    constructor(id: number, pairId: number, frontImage: string, backImage: string);
    flip(): void;
    unflip(): void;
    markMatched(): void;
    abstract render(container: HTMLElement): HTMLElement;
}
//# sourceMappingURL=BaseCard.d.ts.map