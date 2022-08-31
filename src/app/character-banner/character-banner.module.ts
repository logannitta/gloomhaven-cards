import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterBannerComponent } from './character-banner.component';
import { HealthTrackerModule } from '../health-tracker/health-tracker.module';
import { ExperienceTrackerModule } from './experience-tracker/experience-tracker.module';
import { HealthTickerModule } from './health-ticker/health-ticker.module';
import { CoinTrackerModule } from './coin-tracker/coin-tracker.module';

@NgModule({
  declarations: [CharacterBannerComponent],
  imports: [
    CommonModule,
    HealthTrackerModule,
    ExperienceTrackerModule,
    HealthTickerModule,
    CoinTrackerModule,
  ],
  exports: [CharacterBannerComponent],
})
export class CharacterBannerModule {}
