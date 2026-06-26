/**
 * IAudioManager — contract for all audio operations in the game.
 */
export interface IAudioManager {
  playBackground(): void;
  stopBackground(): void;
  toggleBackground(): boolean; // returns new muted state
  playFlip(): void;
  playMatch(): void;
  playMismatch(): void;
}
