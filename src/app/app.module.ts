import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MallsComponent } from './malls/malls.component';

import { HttpClientModule } from '@angular/common/http'; // for HTTP requests


@NgModule({
  declarations: [
    AppComponent,
    MallsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
