import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceTrackerComponent } from './experience-tracker.component';

@NgModule({
  declarations: [ExperienceTrackerComponent],
  imports: [CommonModule],
  exports: [ExperienceTrackerComponent],
})
export class ExperienceTrackerModule {}
