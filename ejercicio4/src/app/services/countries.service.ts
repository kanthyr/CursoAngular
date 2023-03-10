import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from '../core/interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url: string = environment.url;

  constructor(private _http: HttpClient) { 

  }

  getCountries(): Observable<Country[]> {
    return this._http.get<Country[]>(this.url);
  }

}
