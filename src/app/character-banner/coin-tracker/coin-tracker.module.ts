import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinTrackerComponent } from './coin-tracker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CoinTrackerComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [CoinTrackerComponent],
})
export class CoinTrackerModule {}
