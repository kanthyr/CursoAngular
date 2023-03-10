import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  token: string ='';

  constructor(private _router: Router) {}
  
  canActivate(): boolean {
    this.onGetValueToken();
    if( this.token === '' ) {
      this._router.navigateByUrl('');
      return false;
    } else {
      return true;
    }
  }

  onGetValueToken(): void {
    this.token = localStorage.getItem('token') || '';
  }

}
