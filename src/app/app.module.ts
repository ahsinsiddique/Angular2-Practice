import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';


import { AppComponent } from './app.component';
import { HightlightDirective } from './shared/hightlight.directive';
import { UnlessDirective } from './shared/unless.directive';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    HightlightDirective,
    UnlessDirective,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
   /* RouterModule,
    Routes*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
