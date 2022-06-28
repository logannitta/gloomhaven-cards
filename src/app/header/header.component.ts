import { Component, OnInit } from '@angular/core';
import { MenuCloseReason } from '@angular/material/menu/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  characters = [
    {
      text: 'Basic',
      value: 'basic',
      icon: 'assets/classes/Base.png',
    },
    { text: 'Brute', value: 'brute', icon: 'assets/classes/Brute.png' },
    {
      text: 'Cragheart',
      value: 'cragheart',
      icon: 'assets/classes/Cragheart.png',
    },
    {
      text: 'Mindthief',
      value: 'mindthief',
      icon: 'assets/classes/Mindthief.png',
    },
    {
      text: 'Scoundrel',
      value: 'scoundrel',
      icon: 'assets/classes/Scoundrel.png',
    },
    {
      text: 'Spellweaver',
      value: 'spellweaver',
      icon: 'assets/classes/Spellweaver.png',
    },
    {
      text: 'Tinkerer',
      value: 'tinkerer',
      icon: 'assets/classes/Tinkerer.png',
    },
    {
      text: 'Doomstalker',
      value: 'doomstalker',
      icon: 'assets/classes/Angry Face.png',
    },
    {
      text: 'Summoner',
      value: 'summoner',
      icon: 'assets/classes/Circles.png',
    },
    {
      text: 'Plagueherald',
      value: 'plagueherald',
      icon: 'assets/classes/Cthulu.png',
    },
    {
      text: 'Nightshroud',
      value: 'nightshroud',
      icon: 'assets/classes/Eclipse.png',
    },
    {
      text: 'Berserker',
      value: 'berserker',
      icon: 'assets/classes/Lightning Bolts.png',
    },
    {
      text: 'Soothsinger',
      value: 'soothsinger',
      icon: 'assets/classes/Music Notes.png',
    },
    {
      text: 'Sawbones',
      value: 'sawbones',
      icon: 'assets/classes/Saw.png',
    },
    {
      text: 'Sunkeeper',
      value: 'sunkeeper',
      icon: 'assets/classes/Sun.png',
    },
    {
      text: 'Quartermaster',
      value: 'quartermaster',
      icon: 'assets/classes/Three Spears.png',
    },
    {
      text: 'Elementalist',
      value: 'elementalist',
      icon: 'assets/classes/Triangles.png',
    },
    {
      text: 'BeastTyrant',
      value: 'beastTyrant',
      icon: 'assets/classes/Two Minis.png',
    },
    {
      text: 'Diviner',
      value: 'diviner',
      icon: 'assets/classes/Diviner.png',
    },
    {
      text: 'Demolitionist',
      value: 'demolitionist',
      icon: 'assets/classes/Demolitionist.png',
    },
    {
      text: 'Hatchet',
      value: 'hatchet',
      icon: 'assets/classes/Hatchet.png',
    },
    {
      text: 'RedGuard',
      value: 'redGuard',
      icon: 'assets/classes/Red Guard.png',
    },
    {
      text: 'Voidwarden',
      value: 'voidwarden',
      icon: 'assets/classes/Voidwarden.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  menuClosed(reason: string) {
    console.log(reason);
  }
}
