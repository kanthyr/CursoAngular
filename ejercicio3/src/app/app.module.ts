import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Pagina4Component } from './components/pagina4/pagina4.component';
import { HijoComponent } from './components/pagina4/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Pagina1Component,
    Pagina2Component,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    Pagina3Component,
    Pagina4Component,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
