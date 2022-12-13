import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { ClassModule } from './class/class.module';
import { GameSelctorComponent } from './game-selctor/game-selctor.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'game-selector', component: GameSelctorComponent },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'game-selector' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ClassModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
