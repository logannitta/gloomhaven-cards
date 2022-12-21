import { Component, Input, OnInit } from '@angular/core';
import { MenuCloseReason } from '@angular/material/menu/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() game: string;

  gloomhavenCharacters = [
    {
      text: 'Basic',
      value: 'basic',
      icon: 'assets/classes/Base.png',
    },
    { text: 'Brute', value: 'brute', icon: 'assets/classes/Brute/Brute.png' },
    {
      text: 'Cragheart',
      value: 'cragheart',
      icon: 'assets/classes/Cragheart/Cragheart.png',
    },
    {
      text: 'Mindthief',
      value: 'mindthief',
      icon: 'assets/classes/Mindthief/Mindthief.png',
    },
    {
      text: 'Scoundrel',
      value: 'scoundrel',
      icon: 'assets/classes/Scoundrel/Scoundrel.png',
    },
    {
      text: 'Spellweaver',
      value: 'spellweaver',
      icon: 'assets/classes/Spellweaver/Spellweaver.png',
    },
    {
      text: 'Tinkerer',
      value: 'tinkerer',
      icon: 'assets/classes/Tinkerer/Tinkerer.png',
    },
    {
      text: 'Doomstalker',
      value: 'doomstalker',
      icon: 'assets/classes/Doomstalker/Angry Face.png',
    },
    {
      text: 'Summoner',
      value: 'summoner',
      icon: 'assets/classes/Summoner/Circles.png',
    },
    {
      text: 'Plagueherald',
      value: 'plagueherald',
      icon: 'assets/classes/Plagueherald/Cthulu.png',
    },
    {
      text: 'Nightshroud',
      value: 'nightshroud',
      icon: 'assets/classes/Nightshroud/Eclipse.png',
    },
    {
      text: 'Berserker',
      value: 'berserker',
      icon: 'assets/classes/Berserker/Lightning Bolts.png',
    },
    {
      text: 'Soothsinger',
      value: 'soothsinger',
      icon: 'assets/classes/Soothsinger/Music Notes.png',
    },
    {
      text: 'Sawbones',
      value: 'sawbones',
      icon: 'assets/classes/Sawbones/Saw.png',
    },
    {
      text: 'Sunkeeper',
      value: 'sunkeeper',
      icon: 'assets/classes/Sunkeeper/Sun.png',
    },
    {
      text: 'Quartermaster',
      value: 'quartermaster',
      icon: 'assets/classes/Quartermaster/Three Spears.png',
    },
    {
      text: 'Elementalist',
      value: 'elementalist',
      icon: 'assets/classes/Elementalist/Triangles.png',
    },
    {
      text: 'BeastTyrant',
      value: 'beastTyrant',
      icon: 'assets/classes/BeastTyrant/Two Minis.png',
    },
    {
      text: 'Diviner',
      value: 'diviner',
      icon: 'assets/classes/Diviner/Diviner.png',
    },
    {
      text: 'Demolitionist',
      value: 'demolitionist',
      icon: 'assets/classes/Demolitionist/Demolitionist.png',
    },
    {
      text: 'Hatchet',
      value: 'hatchet',
      icon: 'assets/classes/Hatchet/Hatchet.png',
    },
    {
      text: 'RedGuard',
      value: 'redGuard',
      icon: 'assets/classes/RedGuard/Red Guard.png',
    },
    {
      text: 'Voidwarden',
      value: 'voidwarden',
      icon: 'assets/classes/Voidwarden/Voidwarden.png',
    },
  ];

  frosthavenCharacters = [
    {
      text: 'Deathwalker',
      value: 'deathwalker',
      icon: 'assets/classes/Deathwalker/Deathwalker.png',
    },
  ];

  characters = this.gloomhavenCharacters;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.characters =
      this.game === 'gloomhaven'
        ? this.gloomhavenCharacters
        : this.frosthavenCharacters;
  }

  menuClosed(reason: string) {
    console.log(reason);
  }

  home() {
    this.router.navigate(['game-selector']);
  }
}
