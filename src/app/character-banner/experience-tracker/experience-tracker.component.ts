import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-tracker',
  templateUrl: './experience-tracker.component.html',
  styleUrls: ['./experience-tracker.component.scss'],
})
export class ExperienceTrackerComponent implements OnInit {
  @Output() addExperienceClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  experience() {
    this.addExperienceClicked.emit();
  }
}
