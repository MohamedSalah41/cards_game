import { IProgressTracker } from "../interfaces/IProgressTracker.js";
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