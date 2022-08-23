import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { HealthTrackerComponent } from './health-tracker.component';

@NgModule({
  declarations: [HealthTrackerComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [HealthTrackerComponent],
})
export class HealthTrackerModule {}
