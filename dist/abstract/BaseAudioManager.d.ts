import { IAudioManager } from "../interfaces/IAudioManager.js";
export declare abstract class BaseAudioManager implements IAudioManager {
    protected bgAudio: HTMLAudioElement;
    protected flipAudio: HTMLAudioElement;
    protected matchAudio: HTMLAudioElement;
    protected mismatchAudio: HTMLAudioElement;
    constructor();
    protected loadAll(): void;
    private createAudio;
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
    private cloneAndPlay;
}
//# sourceMappingURL=BaseAudioManager.d.ts.map