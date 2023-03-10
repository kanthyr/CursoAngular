import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private _breakpointObserver: BreakpointObserver, 
              private _userService: UserService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  onLogOut(): void {
    const id = JSON.parse(localStorage.getItem('usuario') || '').id;
    this._userService.logOut(id).subscribe(
      data => {
        this._router.navigateByUrl('');
        Swal.fire({  icon: 'success',  title: 'Operación realizada con éxito.',  text: data.status});
        localStorage.clear();
      },
      error => {
        Swal.fire({  icon: 'error',  title: 'No se pudo cerrar sesión',  text: error.status});
      }
    );
  }

}
