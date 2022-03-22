import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BruteComponent } from './brute/brute.component';

@NgModule({
  declarations: [AppComponent, BruteComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-center' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
