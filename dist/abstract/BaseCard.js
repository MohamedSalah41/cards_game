export class BaseCard {
    constructor(id, pairId, frontImage, backImage) {
        this.id = id;
        this.pairId = pairId;
        this.frontImage = frontImage;
        this.backImage = backImage;
        this.isFlipped = false;
        this.isMatched = false;
    }
    flip() {
        if (!this.isMatched) {
            this.isFlipped = true;
        }
    }
    unflip() {
        if (!this.isMatched) {
            this.isFlipped = false;
        }
    }
    markMatched() {
        this.isMatched = true;
        this.isFlipped = true;
    }
}
//# sourceMappingURL=BaseCard.js.map