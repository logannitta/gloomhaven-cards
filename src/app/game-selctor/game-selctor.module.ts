import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSelctorComponent } from './game-selctor.component';
import { MatButtonModule } from '@angular/material/button';
import { GameSelectorRoutingModule } from './game-selector-routing.module';

@NgModule({
  declarations: [GameSelctorComponent],
  imports: [CommonModule, GameSelectorRoutingModule, MatButtonModule],
  exports: [GameSelctorComponent],
})
export class GameSelctorModule {}
