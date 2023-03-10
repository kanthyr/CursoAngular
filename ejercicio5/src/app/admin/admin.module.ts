import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './components/users/users.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    UsersComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule
  ]
})
export class AdminModule { }
