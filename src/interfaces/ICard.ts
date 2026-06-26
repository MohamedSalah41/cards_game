/**
 * ICard — describes the data shape of a single card.
 */
export interface ICard {
  id: number;
  pairId: number;        // cards sharing the same pairId are a match
  frontImage: string;    // path to front face image
  backImage: string;     // path to back face image
  isFlipped: boolean;
  isMatched: boolean;
}
