import { IAudioManager } from "../interfaces/IAudioManager.js";

/**
 * BaseAudioManager — abstract class that handles the common
 * HTMLAudioElement loading pattern.
 * Subclasses supply the actual audio file paths.
 */
export abstract class BaseAudioManager implements IAudioManager {
  protected bgAudio!: HTMLAudioElement;
  protected flipAudio!: HTMLAudioElement;
  protected matchAudio!: HTMLAudioElement;
  protected mismatchAudio!: HTMLAudioElement;

  constructor() {
    this.loadAll();
  }

  /** Load all audio assets — called once in the constructor. */
  protected loadAll(): void {
    this.bgAudio = this.createAudio(this.backgroundSrc(), true);
    this.flipAudio = this.createAudio(this.flipSrc());
    this.matchAudio = this.createAudio(this.matchSrc());
    this.mismatchAudio = this.createAudio(this.mismatchSrc());
  }

  private createAudio(src: string, loop = false): HTMLAudioElement {
    const audio = new Audio(src);
    audio.loop = loop;
    audio.preload = "auto";
    return audio;
  }

  /** Subclasses declare the paths. */
  protected abstract backgroundSrc(): string;
  protected abstract flipSrc(): string;
  protected abstract matchSrc(): string;
  protected abstract mismatchSrc(): string;

  playBackground(): void {
    this.bgAudio.play().catch(() => {
      // autoplay policy may block; user interaction is needed first
    });
  }

  stopBackground(): void {
    this.bgAudio.pause();
    this.bgAudio.currentTime = 0;
  }

  toggleBackground(): boolean {
    if (this.bgAudio.paused) {
      this.bgAudio.play().catch(() => {});
      return false; // not muted
    } else {
      this.bgAudio.pause();
      return true; // muted
    }
  }

  playFlip(): void {
    this.cloneAndPlay(this.flipAudio);
  }

  playMatch(): void {
    this.cloneAndPlay(this.matchAudio);
  }

  playMismatch(): void {
    this.cloneAndPlay(this.mismatchAudio);
  }

  /** Clone so sounds can overlap without interruption. */
  private cloneAndPlay(audio: HTMLAudioElement): void {
    const clone = audio.cloneNode() as HTMLAudioElement;
    clone.play().catch(() => {});
  }
}
