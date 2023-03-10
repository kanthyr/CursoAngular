import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {
  
  title: string = "Hola Mundo";

  constructor() { }

  ngOnInit(): void {
  }

  OnCreateBinding(value: string):void
  {
    this.title = value;
    console.log(this.title);
  }
}
