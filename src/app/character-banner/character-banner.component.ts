import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../characters/character';

@Component({
  selector: 'app-character-banner',
  templateUrl: './character-banner.component.html',
  styleUrls: ['./character-banner.component.scss'],
})
export class CharacterBannerComponent implements OnInit {
  @Input() characterClass: Character;
  characterLevel: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
