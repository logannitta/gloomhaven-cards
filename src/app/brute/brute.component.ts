import { Component, OnInit } from '@angular/core';

export interface Perk {
  name: string;
  completed: boolean;
  text: string;
}

@Component({
  selector: 'app-brute',
  templateUrl: './brute.component.html',
  styleUrls: ['./brute.component.css'],
})
export class BruteComponent implements OnInit {
  constructor() {}

  perks: Perk[] = [
    { name: 'Primary', completed: false, text: 'Remove two (-1) cards' },
    {
      name: 'Primary',
      completed: false,
      text: 'Replace one (-1) card with one (+1) card',
    },
    { name: 'Primary', completed: false, text: 'Add two (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add two (+1) cards' },
    { name: 'Primary', completed: false, text: 'Add one (+3) card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Push 1] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add three rolling [Push 1] cards',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add two rolling [Pierce 3] cards',
    },
    { name: 'Primary', completed: false, text: 'Add one rolling [Stun] card' },
    { name: 'Primary', completed: false, text: 'Add one rolling [Stun] card' },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Disarm] card and one rolling [Muddle] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one rolling [Add Target] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Add one (+1) [Shield 1, Self] card',
    },
    {
      name: 'Primary',
      completed: false,
      text: 'Ignore negative item effects and add one (+1) card',
    },
  ];

  ngOnInit(): void {}
}
