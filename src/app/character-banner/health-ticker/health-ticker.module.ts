import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthTickerComponent } from './health-ticker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HealthTickerComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [HealthTickerComponent],
})
export class HealthTickerModule {}
