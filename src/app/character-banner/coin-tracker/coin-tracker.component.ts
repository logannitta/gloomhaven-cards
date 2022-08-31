import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coin-tracker',
  templateUrl: './coin-tracker.component.html',
  styleUrls: ['./coin-tracker.component.scss'],
})
export class CoinTrackerComponent implements OnInit {
  @Output() addCoinsClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  coins() {
    this.addCoinsClicked.emit();
  }
}
