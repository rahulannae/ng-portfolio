import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private sharedService: SharedService) { }

  multiply(a: number, b: number) {
    this.sharedService.someAction(2);
    return a * b;
  }
  add(a: number, b: number) {
    return a + b;
  }
}
