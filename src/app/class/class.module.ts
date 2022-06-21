import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DeckModule } from '../deck/deck.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { PerkListModule } from '../perk-list/perk-list.module';

@NgModule({
  declarations: [ClassComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    DeckModule,
    MatSnackBarModule,
    ToastrModule,
    MatButtonModule,
    PerkListModule,
  ],
  exports: [ClassComponent],
})
export class ClassModule {}
