import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Character, CharacterMap, Perk } from '../characters/character';
import { basicCards, basicDeck, Card, CardId } from '../deck/basic-deck';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {
  characterClass: Character;
  characterLevel: number = 1;
  image?: string;
  deck: Card[] = [];
  pulledCards: Card[] = [];
  perkActionsRan: any[] = [];
  perksHidden: boolean = true;

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const className = params['characterClass'];
      this.characterClass = new CharacterMap[className]();
      this.characterLevel = 1;
      this.deck = this.shuffle([...basicDeck]);
      this.pulledCards = [];
      this.perkActionsRan = [];
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

  mixClicked() {
    // this.deck = this.shuffle([...this.specialCards, ...basicDeck]);
    const blessingsAndCurses = this.deck.filter((card: Card) => {
      return card.id === CardId.bless || card.id === CardId.curse;
    });
    let deck = [...basicDeck];
    this.perkActionsRan.forEach((fn: Function) => (deck = fn(deck)));
    this.deck = this.shuffle([...deck, ...blessingsAndCurses]);

    this.snackBar.open('Shuffled', undefined, {
      duration: 3000,
      panelClass: 'shuffleComplete',
    });
  }

  addBless() {
    this.deck.push(basicCards.bless);
    this.deck = this.shuffle(this.deck);
    this.snackBar.open('Bless Added', undefined, {
      duration: 3000,
      panelClass: 'bless',
    });
  }

  addCurse() {
    this.deck.push(basicCards.curse);
    this.deck = this.shuffle(this.deck);
    this.snackBar.open('Curse Added', undefined, {
      duration: 3000,
      panelClass: 'curse',
    });
  }

  addOrRemovePerk(perk: Perk) {
    if (perk.completed && perk.addAction) {
      const success = perk.addAction([...this.deck]);
      if (!success) {
        this.onActionFailure(perk);
        return;
      }
      this.deck = this.shuffle(success);
      this.perkActionsRan.push(perk.addAction);
    } else if (perk.removeAction) {
      const perkRemoved = perk.removeAction([...this.deck]);
      if (!perkRemoved) {
        this.onActionFailure(perk);
        return;
      }
      this.deck = this.shuffle(perkRemoved);
      this.perkActionsRan.push(perk.removeAction);
    }
  }

  private onActionFailure(perk: Perk) {
    this.snackBar.open('Action Unavailable', undefined, {
      duration: 3000,
      panelClass: 'shuffleComplete',
    });
    setTimeout(() => {
      perk.completed = !perk.completed;
    });
  }
}
