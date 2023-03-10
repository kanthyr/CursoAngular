import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path:'', component:PrincipalComponent, 
    children:[ { path:'users', component:UsersComponent } ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
