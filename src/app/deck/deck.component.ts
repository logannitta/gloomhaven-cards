import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { Card, basicDeck } from './basic-deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
})
export class DeckComponent implements OnInit {
  private showingShuffleCard = false;
  needShuffle = true;

  @Input() deck: Card[] = [];
  @Input() pulledCards: Card[] = [];

  @Output() bless: EventEmitter<any> = new EventEmitter();
  addBless() {
    this.bless.emit();
  }
  @Output() curse: EventEmitter<any> = new EventEmitter();
  addCurse() {
    this.curse.emit();
  }
  @Output() mix: EventEmitter<any> = new EventEmitter();
  mixClicked() {
    this.showingShuffleCard = true;
    this.needShuffle = true;
    this.mix.emit();
  }

  constructor(private toastr: ToastrService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  drawCard() {
    if (this.showingShuffleCard) {
      this.pulledCards = [];
      this.showingShuffleCard = false;
    }

    const drawnCard = this.deck.splice(0, 1)[0];
    this.pulledCards.unshift(drawnCard);

    if (drawnCard?.shuffle) {
      this.needShuffle = false;
    }
  }
}
