import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, CharacterMap, Perk } from '../characters/character';
import { basicDeck, Card } from '../deck/basic-deck';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  basicCards: Card[] = basicDeck;
  characterClass: Character | undefined;

  deck: Card[] = [];
  pulledCards: Card[] = [];

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const className = params['characterClass'];
      this.characterClass = new CharacterMap[className]();
      console.log(this.characterClass);
      this.deck = this.shuffle([...basicDeck]);
      this.pulledCards = [];
    });
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
    this.snackBar.open('Bless Added', undefined, {
      duration: 3000,
      panelClass: 'bless',
    });
  }

  addCurse() {
    this.deck.push({
      img: 'assets/cards/Curse.png',
      damage: 0,
      status: true,
    });
    this.deck = this.shuffle(this.deck);
    this.snackBar.open('Curse Added', undefined, {
      duration: 3000,
      panelClass: 'curse',
    });
  }

  mixClicked() {
    const statusCards = this.deck.filter((card: Card) => {
      return card.status;
    });
    this.deck = this.shuffle([...this.basicCards, ...statusCards]);
    this.snackBar.open('Shuffled', undefined, {
      duration: 3000,
      panelClass: 'shuffleComplete',
    });
  }

  addOrRemovePerk(perk: Perk) {
    if (perk.completed) {
      console.log('Perk Added');
    } else {
      console.log('Perk Removed');
    }
  }
}
