import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmakService{
    constructor(private http:Http){
        console.log('Filmen zerbitzua abiarazita...');
    }
    
    getFilmak(){
        return this.http.get('/filmak')
            .map(res => res.json());
    }
    
    addFilma(newFilma){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }
    
    deleteFilma(izena){
        return this.http.delete('/api/task/'+id)
            .map(res => res.json());
    }
    
    updateFilma(filma){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }
}