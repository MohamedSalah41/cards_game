/**
 * IProgressTracker — tracks and exposes match progress.
 */
export interface IProgressTracker {
    readonly totalPairs: number;
    readonly matchedPairs: number;
    readonly progressPercent: number;
    increment(): void;
    reset(): void;
}
//# sourceMappingURL=IProgressTracker.d.ts.map