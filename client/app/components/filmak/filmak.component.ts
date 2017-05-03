import { Component } from '@angular/core';
import {FilmakService} from '../../services/filma.service';
import {Filma} from '../../../Filma';

@Component({
  moduleId: module.id,
  selector: 'filmak',
  templateUrl: 'filmak.component.html'
})

export class FilmakComponent {

	filmak: Filma[];
	izena: string;
	deskribapena:string;

	constructor(private filmakService:FilmakService) {
		this.filmakService.getFilmak()
		.subscribe(filmak => {
			this.filmak=filmak;
		});
	}

	addFilma(event) {
		event.preventDefault();
		console.log(this.izena);
		var newFilma = {
			izena: this.izena,
			deskribapena: this.deskribapena,
			gogokoak: [],
			bozkak: []
		}

		this.filmakService.addFilma(newFilma)
		.subscribe(filma => {
			this.filmak.push(filma);
			this.izena='';
			this.deskribapena = '';
		});
	}

	deleteFilma(id) {
		var filmak=this.filmak;
		console.log("ezabatzen "+id);
		this.filmakService.deleteFilma(id)
		.subscribe(data => {
			if(data.n==1) {
				for(var i=0;i<filmak.length;i++)
					if(filmak[i]._id==id) {
						filmak.splice(i,1);
					}
			}
		});
	}

	updateFilmaIzena(filma, dataizena) {
		if(filma.izena!=dataizena) {
			console.log(filma.izena+" "+dataizena);
			var newFilma = {
				_id: filma._id,
				izena: dataizena,
				deskribapena: filma.deskribapena,
				gogokoak: filma.gogokoak,
				bozkak: filma.bozkak
			};
			this.filmakService.updateFilma(newFilma)
			.subscribe(data => {
				filma.izena = newFilma.izena;
			});
		}
	}

	updateFilmaDesk(filma, datadesk) {
		if(filma.deskribapena!=datadesk) {
			console.log(filma.deskribapena+" "+datadesk);
			var newFilma = {
				_id: filma._id,
				izena: filma.izena,
				deskribapena: datadesk,
				gogokoak: filma.gogokoak,
				bozkak: filma.bozkak
			};
			this.filmakService.updateFilma(newFilma)
			.subscribe(data => {
				filma.deskribapena = newFilma.deskribapena;
			});
		}
	}

	updateFilma(filma, dataizen, datadesk)  {
		if(filma.izena!=dataizen || filma.deskribapena!=datadesk) {
			console.log(filma.izena+" eguneratzen...");
			var newFilma = {
				_id: filma._id,
				izena: filma.izena,
				deskribapena: filma.deskribapena,
				gogokoak: filma.gogokoak,
				bozkak: filma.bozkak
			};
			if(filma.izena!=dataizen) {
				newFilma.izena = dataizen;
			}
			if(filma.deskribapena!=datadesk) {
				newFilma.deskribapena = datadesk;
			}
			this.filmakService.updateFilma(newFilma)
			.subscribe(data => {
				filma.izena = newFilma.izena;
				filma.deskribapena = newFilma.deskribapena;
			});
		}
	}
}
