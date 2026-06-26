import { IAudioManager } from "../interfaces/IAudioManager.js";
/**
 * BaseAudioManager — abstract class that handles the common
 * HTMLAudioElement loading pattern.
 * Subclasses supply the actual audio file paths.
 */
export declare abstract class BaseAudioManager implements IAudioManager {
    protected bgAudio: HTMLAudioElement;
    protected flipAudio: HTMLAudioElement;
    protected matchAudio: HTMLAudioElement;
    protected mismatchAudio: HTMLAudioElement;
    constructor();
    /** Load all audio assets — called once in the constructor. */
    protected loadAll(): void;
    private createAudio;
    /** Subclasses declare the paths. */
    protected abstract backgroundSrc(): string;
    protected abstract flipSrc(): string;
    protected abstract matchSrc(): string;
    protected abstract mismatchSrc(): string;
    playBackground(): void;
    stopBackground(): void;
    toggleBackground(): boolean;
    playFlip(): void;
    playMatch(): void;
    playMismatch(): void;
    /** Clone so sounds can overlap without interruption. */
    private cloneAndPlay;
}
//# sourceMappingURL=BaseAudioManager.d.ts.map