export class BaseAudioManager {
    constructor() {
        this.loadAll();
    }
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
        this.bgAudio.play().catch(() => { });
    }
    stopBackground() {
        this.bgAudio.pause();
        this.bgAudio.currentTime = 0;
    }
    toggleBackground() {
        if (this.bgAudio.paused) {
            this.bgAudio.play().catch(() => { });
            return false;
        }
        else {
            this.bgAudio.pause();
            return true;
        }
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
    cloneAndPlay(audio) {
        const clone = audio.cloneNode();
        clone.play().catch(() => { });
    }
}
//# sourceMappingURL=BaseAudioManager.js.map