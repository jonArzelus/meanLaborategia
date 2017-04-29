import { Component } from '@angular/core';
import {FilmakService} from '../../services/filma.service';
import {Filma} from '../../Filma';

@Component({
  moduleId: module.id,
  selector: 'filmak',
  templateUrl: 'filmak.component.html'
})

export class FilmakComponent {

	filmak: Filma[];

	constructor(private filmakService:FilmakService) {
		this.filmakService.getFilmak()
		.subscribe(filmak => {
			this.filmak=filmak;
		});
	}
}
