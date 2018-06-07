import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeListComponent } from './script';
import { JokeComponent } from './script';


@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent    
  ]
})


export class AppModule { }
