import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  change(value: number): void {
    this.count.next(value);
  }
}
