import { ICard } from "../interfaces/ICard.js";
/**
 * BaseCard — abstract class that enforces ICard structure
 * and provides shared flip/match state logic.
 * Concrete subclasses decide how they are rendered.
 */
export declare abstract class BaseCard implements ICard {
    readonly id: number;
    readonly pairId: number;
    readonly frontImage: string;
    readonly backImage: string;
    isFlipped: boolean;
    isMatched: boolean;
    constructor(id: number, pairId: number, frontImage: string, backImage: string);
    /** Flip the card face-up. */
    flip(): void;
    /** Flip back face-down. */
    unflip(): void;
    /** Lock card permanently as matched. */
    markMatched(): void;
    /**
     * Render this card into the DOM.
     * Each subclass provides its own rendering strategy.
     */
    abstract render(container: HTMLElement): HTMLElement;
}
//# sourceMappingURL=BaseCard.d.ts.map