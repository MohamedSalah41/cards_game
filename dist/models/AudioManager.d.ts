import { BaseAudioManager } from "../abstract/BaseAudioManager.js";
/**
 * AudioManager — concrete implementation of BaseAudioManager.
 * Supplies the real audio asset paths.
 */
export declare class AudioManager extends BaseAudioManager {
    protected backgroundSrc(): string;
    protected flipSrc(): string;
    protected matchSrc(): string;
    protected mismatchSrc(): string;
}
//# sourceMappingURL=AudioManager.d.ts.map