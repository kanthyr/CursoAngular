import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component implements OnInit {

  padreTitle: string = "Hola hijo";
  padreTitleHijo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onEventPadre(data:string):void
  {
    this.padreTitleHijo = data;
  }
}
