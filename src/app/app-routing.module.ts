import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { ClassModule } from './class/class.module';

const routes: Routes = [
  { path: ':characterClass', component: ClassComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/basic' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ClassModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
