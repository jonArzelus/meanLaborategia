import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ErabiltzaileakService{
    constructor(private http:Http){
        console.log('Erabiltzaileen zerbitzua abiarazita...');
    }
    
    getErabiltzaileak(){
        return this.http.get('/api/erabiltzaileak')
            .map(res => res.json());
    }
    
    getErabiltzailea(posta, pass){
        console.log(posta+", pass: "+pass);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/erabiltzailea/'+posta+'/'+pass, JSON.stringify(newFilma), {headers: headers})
            .map(res => res.json());
    }
    
    //TODO
    deleteErabiltzailea(id){
        return this.http.delete('/api/filma/'+id)
            .map(res => res.json());
    }
}