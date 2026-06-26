import { Card } from "../models/Card.js";
import { shuffle } from "./shuffle.js";
const TOTAL_PAIRS = 3;
const VALID_PAIR_IDS = [1, 2, 4];
export function createShuffledCards() {
    const cards = [];
    let idCounter = 0;
    for (let i = 0; i < TOTAL_PAIRS; i++) {
        const pairId = VALID_PAIR_IDS[i];
        const frontImage = `assets/images/${pairId}.jpg`;
        const backImage = "assets/images/0.jpg";
        cards.push(new Card(idCounter++, pairId, frontImage, backImage));
        cards.push(new Card(idCounter++, pairId, frontImage, backImage));
    }
    return shuffle(cards);
}
//# sourceMappingURL=cardFactory.js.map