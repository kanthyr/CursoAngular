import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { Pagina4Component } from './components/pagina4/pagina4.component';

const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'pagina1',component:Pagina1Component},
  {path:'pagina2',component:Pagina2Component},
  {path:'pagina3',component:Pagina3Component},
  {path:'pagina4',component:Pagina4Component},
  {path:'**',pathMatch:'full', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
