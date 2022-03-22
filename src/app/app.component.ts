import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

interface Card {
  img: string;
  damage: number;
  shuffle?: boolean;
  status?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'gloomhavenCards';

  basicCards: Card[] = [
    {
      img: 'assets/cards/Times2.png',
      damage: 0,
      shuffle: true,
    },
    {
      img: 'assets/cards/Miss.png',
      damage: 0,
      shuffle: true,
    },
    {
      img: 'assets/cards/Minus1.png',
      damage: -1,
    },
    {
      img: 'assets/cards/Minus1.png',
      damage: -1,
    },
    {
      img: 'assets/cards/Minus1.png',
      damage: -1,
    },
    {
      img: 'assets/cards/Minus1.png',
      damage: -1,
    },
    {
      img: 'assets/cards/Minus1.png',
      damage: -1,
    },
    {
      img: 'assets/cards/Minus2.png',
      damage: -2,
    },

    {
      img: 'assets/cards/Plus0.png',
      damage: 0,
    },
    {
      img: 'assets/cards/Plus0.png',
      damage: 0,
    },
    {
      img: 'assets/cards/Plus0.png',
      damage: 0,
    },
    {
      img: 'assets/cards/Plus0.png',
      damage: 0,
    },
    {
      img: 'assets/cards/Plus0.png',
      damage: 0,
    },
    {
      img: 'assets/cards/Plus0.png',
      damage: 0,
    },
    {
      img: 'assets/cards/Plus1.png',
      damage: 1,
    },
    {
      img: 'assets/cards/Plus1.png',
      damage: 1,
    },
    {
      img: 'assets/cards/Plus1.png',
      damage: 1,
    },
    {
      img: 'assets/cards/Plus1.png',
      damage: 1,
    },
    {
      img: 'assets/cards/Plus1.png',
      damage: 1,
    },
    {
      img: 'assets/cards/Plus2.png',
      damage: 2,
    },
  ];

  pulledCards: Card[] = [];
  showingShuffleCard = false;

  deck: Card[] = [...this.basicCards];

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.deck = this.shuffle(this.deck);
  }

  private shuffle(deck: Card[]) {
    const cards = [...deck];
    let currentCards = cards.length,
      randomCards;
    while (currentCards != 0) {
      randomCards = Math.floor(Math.random() * currentCards);
      currentCards--;
      [cards[currentCards], cards[randomCards]] = [
        cards[randomCards],
        cards[currentCards],
      ];
    }
    return cards;
  }

  addBless() {
    this.deck.push({
      img: 'assets/cards/Bless.png',
      damage: 0,
      status: true,
    });
    this.deck = this.shuffle(this.deck);
    this.toastr.warning('Bless Added');
  }

  addCurse() {
    this.deck.push({
      img: 'assets/cards/Curse.png',
      damage: 0,
      status: true,
    });
    this.deck = this.shuffle(this.deck);
    this.toastr.error('Curse Added');
  }

  drawCard() {
    if (this.showingShuffleCard) {
      this.pulledCards = [];
      this.showingShuffleCard = false;
    }

    const drawnCard = this.deck.splice(0, 1)[0];
    this.pulledCards.unshift(drawnCard);

    if (drawnCard?.shuffle) {
      this.showingShuffleCard = true;
      const statusCards = this.deck.filter((card: Card) => {
        return card.status;
      });
      this.deck = this.shuffle([...this.basicCards, ...statusCards]);
    }
  }
}
