import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Genre } from 'src/app/components/admin-dash/admin-products/Genre.module';

@Injectable({providedIn: 'root'})
export class GenreServiceService {
    constructor(private http: HttpClient) { }

    getAllGenre(){
        return this.http.get(`${environment.serverUrl}/getAllGenre`);
    }

    deleteGenre(id:number){
        return this.http.delete(`${environment.serverUrl}/deleteGenre/${id}`);
    }

    addGenre(genre:Genre){
        return this.http.post(`${environment.serverUrl}/addGenre`,genre);
    }

    updateGenre(genre:Genre){
      return this.http.put(`${environment.serverUrl}/updateGenre/${genre.id}`,genre);
    }
    
    countGenre(){
      return this.http.get(`${environment.serverUrl}/allGenres`);
    }
}