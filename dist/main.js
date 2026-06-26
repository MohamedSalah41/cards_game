import { GameController } from "./controllers/GameController.js";
import { AudioManager } from "./models/AudioManager.js";
import { ProgressTracker } from "./models/ProgressTracker.js";
import { UIRenderer } from "./ui/UIRenderer.js";
const TOTAL_PAIRS = 3;
document.addEventListener("DOMContentLoaded", () => {
    const audio = new AudioManager();
    const tracker = new ProgressTracker(TOTAL_PAIRS);
    const ui = new UIRenderer();
    const game = new GameController(audio, tracker, ui);
    game.start();
    const restartBtn = document.getElementById("restart-btn");
    restartBtn?.addEventListener("click", () => game.restart());
    const muteBtn = document.getElementById("mute-btn");
    muteBtn?.addEventListener("click", () => {
        const isMuted = audio.toggleBackground();
        if (muteBtn)
            muteBtn.textContent = isMuted ? "🔇 Music" : "🔊 Music";
    });
});
//# sourceMappingURL=main.js.map