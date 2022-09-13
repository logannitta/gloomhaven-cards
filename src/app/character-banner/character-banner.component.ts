import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Character } from '../characters/character';

@Component({
  selector: 'app-character-banner',
  templateUrl: './character-banner.component.html',
  styleUrls: ['./character-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterBannerComponent implements OnInit, OnChanges {
  @Input() characterClass: Character;
  currentHealth: number;
  maxHealth: number;
  characterLevel: number = 1;
  experience: number = 0;
  coins: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const { characterClass = null } = changes;
    if (characterClass) {
      this.setHealth();
      this.experience = 0;
      this.coins = 0;
    }
  }

  addHealthClickedHandler() {
    if (this.currentHealth + 1 > this.maxHealth) {
      return;
    }
    this.currentHealth++;
  }

  minusHealthClickedHandler() {
    if (this.currentHealth - 1 < 0) {
      return;
    }
    if (this.currentHealth - 1 === 0) {
      this.currentHealth--;
      return alert('Death');
    }
    this.currentHealth--;
  }

  addExperienceClickedHandler() {
    this.experience++;
  }

  addCoinsClickedHandler() {
    this.coins++;
  }

  changeLevelHandler(level: number) {
    this.setHealth(level);
  }

  private setHealth(characterLevel: number = 1) {
    this.characterLevel = characterLevel;
    const health = this.characterClass.health[this.characterLevel - 1];
    this.currentHealth = health;
    this.maxHealth = health;
  }
}
