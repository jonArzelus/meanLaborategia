import { Component } from '@angular/core';
import {FilmakService} from './services/filma.service';
import {ErabiltzaileakService} from './services/erabiltzailea.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[FilmakService,ErabiltzaileakService]
})

export class AppComponent { }
