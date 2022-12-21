import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-selctor',
  templateUrl: './game-selctor.component.html',
  styleUrls: ['./game-selctor.component.scss'],
})
export class GameSelctorComponent implements OnInit {
  game: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getFrosty() {
    this.router.navigate(['frosthaven']);
  }
  getGloomy() {
    this.router.navigate(['gloomhaven']);
  }
}
