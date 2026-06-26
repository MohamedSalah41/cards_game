/**
 * BaseCard — abstract class that enforces ICard structure
 * and provides shared flip/match state logic.
 * Concrete subclasses decide how they are rendered.
 */
export class BaseCard {
    constructor(id, pairId, frontImage, backImage) {
        this.id = id;
        this.pairId = pairId;
        this.frontImage = frontImage;
        this.backImage = backImage;
        this.isFlipped = false;
        this.isMatched = false;
    }
    /** Flip the card face-up. */
    flip() {
        if (!this.isMatched) {
            this.isFlipped = true;
        }
    }
    /** Flip back face-down. */
    unflip() {
        if (!this.isMatched) {
            this.isFlipped = false;
        }
    }
    /** Lock card permanently as matched. */
    markMatched() {
        this.isMatched = true;
        this.isFlipped = true;
    }
}
//# sourceMappingURL=BaseCard.js.map