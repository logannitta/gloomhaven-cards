import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterBannerComponent } from './character-banner.component';
import { HealthTrackerModule } from '../health-tracker/health-tracker.module';
import { ExperienceTrackerModule } from './experience-tracker/experience-tracker.module';
import { HealthTickerModule } from './health-ticker/health-ticker.module';
import { CoinTrackerModule } from './coin-tracker/coin-tracker.module';
import { LevelSelectorModule } from './level-selector/level-selector.module';

@NgModule({
  declarations: [CharacterBannerComponent],
  imports: [
    CommonModule,
    HealthTrackerModule,
    ExperienceTrackerModule,
    HealthTickerModule,
    CoinTrackerModule,
    LevelSelectorModule,
  ],
  exports: [CharacterBannerComponent],
})
export class CharacterBannerModule {}
