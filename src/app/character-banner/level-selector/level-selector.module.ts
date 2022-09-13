import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { LevelSelectorComponent } from './level-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LevelSelectorComponent],
  imports: [CommonModule, MatSelectModule, FormsModule],
  exports: [LevelSelectorComponent],
})
export class LevelSelectorModule {}
