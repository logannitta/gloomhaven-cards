import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-level-selector',
  templateUrl: './level-selector.component.html',
  styleUrls: ['./level-selector.component.scss'],
})
export class LevelSelectorComponent implements OnInit {
  @Input() characterLevel: number;
  @Output() changeLevel = new EventEmitter();

  level: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  ngOnInit(): void {}

  selectLevel() {
    this.changeLevel.emit(this.characterLevel);
  }
}
