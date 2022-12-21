import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from '../class/class.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'gloomhaven',
    component: HomeComponent,
    children: [{ path: ':characterClass', component: ClassComponent }],
  },
  {
    path: 'frosthaven',
    component: HomeComponent,
    children: [{ path: ':characterClass', component: ClassComponent }],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/game-selector',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
