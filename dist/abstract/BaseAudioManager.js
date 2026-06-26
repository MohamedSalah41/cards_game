/**
 * BaseAudioManager — abstract class that handles the common
 * HTMLAudioElement loading pattern.
 * Subclasses supply the actual audio file paths.
 */
export class BaseAudioManager {
    constructor() {
        this.loadAll();
    }
    /** Load all audio assets — called once in the constructor. */
    loadAll() {
        this.bgAudio = this.createAudio(this.backgroundSrc(), true);
        this.flipAudio = this.createAudio(this.flipSrc());
        this.matchAudio = this.createAudio(this.matchSrc());
        this.mismatchAudio = this.createAudio(this.mismatchSrc());
    }
    createAudio(src, loop = false) {
        const audio = new Audio(src);
        audio.loop = loop;
        audio.preload = "auto";
        return audio;
    }
    playBackground() {
        this.bgAudio.play().catch(() => {
            // autoplay policy may block; user interaction is needed first
        });
    }
    stopBackground() {
        this.bgAudio.pause();
        this.bgAudio.currentTime = 0;
    }
    playFlip() {
        this.cloneAndPlay(this.flipAudio);
    }
    playMatch() {
        this.cloneAndPlay(this.matchAudio);
    }
    playMismatch() {
        this.cloneAndPlay(this.mismatchAudio);
    }
    /** Clone so sounds can overlap without interruption. */
    cloneAndPlay(audio) {
        const clone = audio.cloneNode();
        clone.play().catch(() => { });
    }
}
//# sourceMappingURL=BaseAudioManager.js.map