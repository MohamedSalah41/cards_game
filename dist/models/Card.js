import { BaseCard } from "../abstract/BaseCard.js";
export class Card extends BaseCard {
    constructor() {
        super(...arguments);
        this.element = null;
    }
    render(container) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset["id"] = String(this.id);
        const inner = document.createElement("div");
        inner.classList.add("card__inner");
        const back = document.createElement("div");
        back.classList.add("card__back");
        const backImg = document.createElement("img");
        backImg.src = this.backImage;
        backImg.alt = "Card back";
        back.appendChild(backImg);
        const front = document.createElement("div");
        front.classList.add("card__front");
        const frontImg = document.createElement("img");
        frontImg.src = this.frontImage;
        frontImg.alt = `Card ${this.pairId}`;
        front.appendChild(frontImg);
        inner.appendChild(back);
        inner.appendChild(front);
        card.appendChild(inner);
        container.appendChild(card);
        this.element = card;
        return card;
    }
    updateDOM() {
        if (!this.element)
            return;
        this.element.classList.toggle("card--flipped", this.isFlipped);
        this.element.classList.toggle("card--matched", this.isMatched);
    }
}
//# sourceMappingURL=Card.js.map