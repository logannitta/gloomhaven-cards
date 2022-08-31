import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-health-ticker',
  templateUrl: './health-ticker.component.html',
  styleUrls: ['./health-ticker.component.scss'],
})
export class HealthTickerComponent implements OnInit {
  @Output() addHealthClicked = new EventEmitter();
  @Output() minusHealthClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  plusHealth() {
    this.addHealthClicked.emit();
  }

  minusHealth() {
    this.minusHealthClicked.emit();
  }
}
