import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
  counter = 3;
  timer: any;

  constructor(private httpClient: HttpClient) {

  }
  @HostListener('click')
  onKeyPress() {
    this.counter = 3;
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      console.log('COUNTER', this.counter);
      this.counter--;
      if (this.counter === 0) {
        this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(x => console.log(x));
        clearInterval(this.timer);
      }
    }, 1000);
  }
}
