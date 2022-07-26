import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Perk } from '../characters/character';

@Component({
  selector: 'app-perk-list',
  templateUrl: './perk-list.component.html',
  styleUrls: ['./perk-list.component.scss'],
})
export class PerkListComponent implements OnInit {
  @Input() perks: Perk[] | undefined = [];

  @Output() addOrRemovePerk: EventEmitter<Perk> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addPerk(perk: Perk) {
    this.addOrRemovePerk.emit(perk);
  }
}
