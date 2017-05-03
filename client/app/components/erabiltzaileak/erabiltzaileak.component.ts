import { Component } from '@angular/core';
import {ErabiltzaileakService} from '../../services/erabiltzailea.service';
import {Erabiltzailea} from '../../../Erabiltzailea';

@Component({
  moduleId: module.id,
  selector: 'erabiltzaileak',
  templateUrl: 'erabiltzaileak.component.html'
})

export class ErabiltzaileakComponent {

	erab: Erabiltzailea
	izena: string;
	postaElektronikoa: string
	pasahitza: pasahitza
	rol:string;

	constructor(private erabiltzaileakService:ErabiltzaileakService) {
		/*this.erabiltzaileakService.getErabiltzaileak()
		.subscribe(erab => {
			this.erab=erab;
		});*/
	}

	getErabiltzailea(event) {
		event.preventDefault();
		console.log(this.posta+" erabiltzailea lortzen...");
		this.erabiltzaileakService.getErabiltzailea(this.posta, this.pass)
		.subscribe(erabiltzailea => {
			this.erab = erabiltzailea;
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
