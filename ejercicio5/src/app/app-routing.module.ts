import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './share/guards/auth.guard';

const routes: Routes = [
  { path:'', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule) },
  { path:'admin', canActivate: [AuthGuard], loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
