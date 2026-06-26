import { IProgressTracker } from "../interfaces/IProgressTracker.js";
/**
 * ProgressTracker — keeps score of matched pairs and
 * exposes a percentage for the progress bar.
 */
export declare class ProgressTracker implements IProgressTracker {
    readonly totalPairs: number;
    private _matchedPairs;
    constructor(totalPairs: number);
    get matchedPairs(): number;
    get progressPercent(): number;
    increment(): void;
    reset(): void;
}
//# sourceMappingURL=ProgressTracker.d.ts.map