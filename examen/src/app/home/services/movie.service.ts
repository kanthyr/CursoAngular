import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  urlService: string = environment.url;

  constructor(private _http:HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(this.urlService);
  }
}
