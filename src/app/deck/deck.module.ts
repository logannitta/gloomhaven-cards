import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DeckComponent],
  imports: [CommonModule, MatSnackBarModule, MatButtonModule],
  exports: [DeckComponent],
})
export class DeckModule {}
