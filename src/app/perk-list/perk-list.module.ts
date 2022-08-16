import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerkListComponent } from './perk-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PerkListComponent],
  imports: [CommonModule, MatCheckboxModule, FormsModule, MatButtonModule],
  exports: [PerkListComponent],
})
export class PerkListModule {}
