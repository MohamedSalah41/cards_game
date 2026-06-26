import { BaseAudioManager } from "../abstract/BaseAudioManager.js";
/**
 * AudioManager — concrete implementation of BaseAudioManager.
 * Supplies the real audio asset paths.
 */
export class AudioManager extends BaseAudioManager {
    backgroundSrc() {
        return "assets/audio/fulltrack.mp3";
    }
    flipSrc() {
        return "assets/audio/flip.mp3";
    }
    matchSrc() {
        return "assets/audio/good.mp3";
    }
    mismatchSrc() {
        return "assets/audio/fail.mp3";
    }
}
//# sourceMappingURL=AudioManager.js.map