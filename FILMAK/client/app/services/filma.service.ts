import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmakService{
    constructor(private http:Http){
        console.log('Filmen zerbitzua abiarazita...');
    }
    
    getFilmak(){
        return this.http.get('/api/filmak')
            .map(res => res.json());
    }
    
    addFilma(newFilma){
        console.log(newFilma);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/filma', JSON.stringify(newFilma), {headers: headers})
            .map(res => res.json());
    }
    
    deleteFilma(id){
        return this.http.delete('/api/filma/'+id)
            .map(res => res.json());
    }
    
    updateFilma(filma){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/filma/'+filma._id, JSON.stringify(filma), {headers: headers})
            .map(res => res.json());
    }
}