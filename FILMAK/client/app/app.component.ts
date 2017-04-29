import { Component } from '@angular/core';
import {FilmakService} from './services/filma.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[FilmakService]
})

export class AppComponent { }
