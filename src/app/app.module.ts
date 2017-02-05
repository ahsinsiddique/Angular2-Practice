import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*import { RouterModule, Routes } from '@angular/router';*/


import { AppComponent } from './app.component';
import { HightlightDirective } from './shared/hightlight.directive';
import { UnlessDirective } from './shared/unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    HightlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   /* RouterModule,
    Routes*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
