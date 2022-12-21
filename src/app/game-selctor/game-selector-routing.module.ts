import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSelctorComponent } from './game-selctor.component';

const routes: Routes = [{ path: '', component: GameSelctorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameSelectorRoutingModule {}
