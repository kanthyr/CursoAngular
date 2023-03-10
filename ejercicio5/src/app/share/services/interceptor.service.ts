import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  
  constructor(private _loaderService:LoaderService, 
              private _router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token: string = localStorage.getItem('token') || '';
    let request = req;

    if (token !== '') {
      const param = request.params.get('tokenheader');
      if (!param) {
        request = req.clone({
          setHeaders: {
            authorization: `token ${token}`
          }
        });
      }
    }
    
    this._loaderService.show();
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this._router.navigateByUrl('');
        }
        return throwError( err );
      }),
      finalize(() => {
        this._loaderService.hide();
      }),
    );
  }
}
