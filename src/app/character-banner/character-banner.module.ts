import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterBannerComponent } from './character-banner.component';
import { HealthTrackerModule } from '../health-tracker/health-tracker.module';

@NgModule({
  declarations: [CharacterBannerComponent],
  imports: [CommonModule, HealthTrackerModule],
  exports: [CharacterBannerComponent],
})
export class CharacterBannerModule {}
