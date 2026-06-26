import { Card } from "../models/Card.js";
import { shuffle } from "./shuffle.js";

const TOTAL_PAIRS = 10; // 10 pairs → 20 cards

/**
 * Builds and shuffles 20 Card instances.
 * Front images: assets/images/card-N.png  (N = 1..10)
 * Back image  : assets/images/card-back.png (same for all)
 */
export function createShuffledCards(): Card[] {
  const cards: Card[] = [];
  let idCounter = 0;

  for (let pairId = 1; pairId <= TOTAL_PAIRS; pairId++) {
    const frontImage = `assets/images/${pairId}.jpg`;
    const backImage = "assets/images/0.jpg";

    // Create both cards of the pair
    cards.push(new Card(idCounter++, pairId, frontImage, backImage));
    cards.push(new Card(idCounter++, pairId, frontImage, backImage));
  }

  return shuffle(cards);
}
