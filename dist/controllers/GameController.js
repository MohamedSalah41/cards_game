import { createShuffledCards } from "../utils/cardFactory.js";
const FLIP_REVEAL_DELAY = 1000;
export class GameController {
    constructor(audio, tracker, ui) {
        this.audio = audio;
        this.tracker = tracker;
        this.ui = ui;
        this.cards = [];
        this.flippedCards = [];
        this.isLocked = false;
    }
    start() {
        this.cards = createShuffledCards();
        this.flippedCards = [];
        this.isLocked = false;
        this.tracker.reset();
        this.ui.renderBoard(this.cards, (id) => this.onCardClick(id));
        this.ui.updateProgress(this.tracker.progressPercent);
        this.audio.playBackground();
    }
    restart() {
        this.audio.stopBackground();
        this.start();
    }
    onCardClick(cardId) {
        if (this.isLocked)
            return;
        const card = this.cards.find((c) => c.id === cardId);
        if (!card || card.isFlipped || card.isMatched)
            return;
        card.flip();
        card.updateDOM();
        this.audio.playFlip();
        this.flippedCards.push(card);
        if (this.flippedCards.length === 2) {
            this.isLocked = true;
            this.evaluate();
        }
    }
    evaluate() {
        const [first, second] = this.flippedCards;
        if (first.pairId === second.pairId) {
            this.handleMatch(first, second);
        }
        else {
            this.handleMismatch(first, second);
        }
    }
    handleMatch(a, b) {
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
    handleMismatch(a, b) {
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
//# sourceMappingURL=GameController.js.map