import { Component } from '@angular/core';
import {ErabiltzaileakService} from '../../services/erabiltzailea.service';
import {Erabiltzailea} from '../../../Erabiltzailea';

@Component({
  moduleId: module.id,
  selector: 'erabiltzaileak',
  templateUrl: 'erabiltzaileak.component.html'
})

export class ErabiltzaileakComponent {

	erab: Erabiltzailea[]
	izena: string;
	rol:string;

	constructor(private erabiltzaileakService:ErabiltzaileakService) {
		this.erabiltzaileakService.getErabiltzaileak()
		.subscribe(erab => {
			this.erab=erab;
		});
	}

	//TODO
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

	//TODO
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
}
