import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    
    console.log('shared cons');
  }

  someAction(a: number){
    
    console.log('shared call');
    return a;
  }
}
