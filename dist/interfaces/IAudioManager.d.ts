/**
 * IAudioManager — contract for all audio operations in the game.
 */
export interface IAudioManager {
    playBackground(): void;
    stopBackground(): void;
    toggleBackground(): boolean;
    playFlip(): void;
    playMatch(): void;
    playMismatch(): void;
}
//# sourceMappingURL=IAudioManager.d.ts.map