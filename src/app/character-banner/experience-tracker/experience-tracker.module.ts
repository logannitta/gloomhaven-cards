import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceTrackerComponent } from './experience-tracker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ExperienceTrackerComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [ExperienceTrackerComponent],
})
export class ExperienceTrackerModule {}
