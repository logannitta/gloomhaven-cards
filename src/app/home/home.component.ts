import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  game: string;

  constructor(private route: ActivatedRoute) {
    this.game = this.route.snapshot.url[0].path;
  }

  ngOnInit(): void {}
}
