import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  counter: BehaviorSubject<number> = this._counterService.count;

  constructor(private _counterService: CounterService) { }

  ngOnInit(): void {
  }

}
