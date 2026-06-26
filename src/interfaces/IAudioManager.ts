/**
 * IAudioManager — contract for all audio operations in the game.
 */
export interface IAudioManager {
  playBackground(): void;
  stopBackground(): void;
  playFlip(): void;
  playMatch(): void;
  playMismatch(): void;
}
