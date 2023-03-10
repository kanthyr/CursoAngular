import { Component, OnInit } from '@angular/core';
import { TYPES, typesData } from 'src/app/constants/const';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  types: typesData = TYPES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
