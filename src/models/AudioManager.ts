import { BaseAudioManager } from "../abstract/BaseAudioManager.js";

export class AudioManager extends BaseAudioManager {
  protected backgroundSrc(): string {
    return "assets/audio/fulltrack.mp3";
  }

  protected flipSrc(): string {
    return "assets/audio/flip.mp3";
  }

  protected matchSrc(): string {
    return "assets/audio/good.mp3";
  }

  protected mismatchSrc(): string {
    return "assets/audio/fail.mp3";
  }
}
