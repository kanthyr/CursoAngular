import { Component, OnInit } from '@angular/core';
import { CITIES, city } from '../../constants/const';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  cities: city[] = CITIES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
