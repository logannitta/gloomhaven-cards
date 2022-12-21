import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassModule } from './class/class.module';

const routes: Routes = [
  {
    path: 'game-selector',
    loadChildren: () =>
      import('./game-selctor/game-selctor.module').then(
        (m) => m.GameSelctorModule
      ),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'game-selector',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ClassModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
