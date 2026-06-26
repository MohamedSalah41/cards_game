import { BaseCard } from "../abstract/BaseCard.js";
/**
 * Card — concrete implementation of BaseCard.
 * Renders an HTML card element with front/back faces.
 */
export declare class Card extends BaseCard {
    private element;
    /**
     * Builds the DOM structure:
     *
     *  <div class="card" data-id="N">
     *    <div class="card__inner">
     *      <div class="card__back">  <img src="back.png"> </div>
     *      <div class="card__front"> <img src="front.png"> </div>
     *    </div>
     *  </div>
     */
    render(container: HTMLElement): HTMLElement;
    /** Sync DOM class with internal state. */
    updateDOM(): void;
}
//# sourceMappingURL=Card.d.ts.map