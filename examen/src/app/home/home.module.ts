import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class HomeModule { }
