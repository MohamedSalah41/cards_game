import { IProgressTracker } from "../interfaces/IProgressTracker.js";

/**
 * ProgressTracker — keeps score of matched pairs and
 * exposes a percentage for the progress bar.
 */
export class ProgressTracker implements IProgressTracker {
  private _matchedPairs: number = 0;

  constructor(public readonly totalPairs: number) {}

  get matchedPairs(): number {
    return this._matchedPairs;
  }

  get progressPercent(): number {
    return Math.round((this._matchedPairs / this.totalPairs) * 100);
  }

  increment(): void {
    if (this._matchedPairs < this.totalPairs) {
      this._matchedPairs++;
    }
  }

  reset(): void {
    this._matchedPairs = 0;
  }
}
