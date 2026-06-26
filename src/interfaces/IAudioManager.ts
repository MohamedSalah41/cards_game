export interface IAudioManager {
  playBackground(): void;
  stopBackground(): void;
  toggleBackground(): boolean;
  playFlip(): void;
  playMatch(): void;
  playMismatch(): void;
}
