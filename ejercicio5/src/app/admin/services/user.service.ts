import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { responseApi, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlService: string = environment.url;

  constructor(private _http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.urlService + 'users/crud/');
  }

  logOut(id: number): Observable<responseApi> {
    return this._http.put<responseApi>(this.urlService + 'users/access/' + id + '/', '', {})
  }
  
}
