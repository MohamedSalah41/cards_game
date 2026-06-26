/**
 * ProgressTracker — keeps score of matched pairs and
 * exposes a percentage for the progress bar.
 */
export class ProgressTracker {
    constructor(totalPairs) {
        this.totalPairs = totalPairs;
        this._matchedPairs = 0;
    }
    get matchedPairs() {
        return this._matchedPairs;
    }
    get progressPercent() {
        return Math.round((this._matchedPairs / this.totalPairs) * 100);
    }
    increment() {
        if (this._matchedPairs < this.totalPairs) {
            this._matchedPairs++;
        }
    }
    reset() {
        this._matchedPairs = 0;
    }
}
//# sourceMappingURL=ProgressTracker.js.map