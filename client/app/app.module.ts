import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {FilmakComponent} from './components/filmak/filmak.component';
import {ErabiltzaileakComponent} from './components/erabiltzaileak/erabiltzaileak.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [AppComponent, FilmakComponent, ErabiltzaileakComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
