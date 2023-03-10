import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { userRegister, responseApi, userLogin, responseToken, User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlService: string= environment.url;
  constructor(private _http:HttpClient) { }

  register(obj: userRegister): Observable<responseApi>{
    return this._http.post<responseApi>(this.urlService + 'users/register/', obj, { params: { tokenheader: 'no' } });
  }

  login(obj: userLogin): Observable<responseToken>{
    return this._http.post<responseToken>(this.urlService + 'users/access/', obj, { params: { tokenheader: 'no' } }).pipe(
      map( resp => {
        this.saveToken(resp.token);
        this.saveUser(resp.user);
        return resp;
      } )
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  saveUser(user: User): void {
    localStorage.setItem('usuario', JSON.stringify(user));
  }
}
