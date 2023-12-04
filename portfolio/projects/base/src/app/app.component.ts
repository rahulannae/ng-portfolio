import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() param = false;
  title = 'base';
  counter = 3;
  timer: any;

  constructor(private containerRef: ViewContainerRef, private templateRef: ElementRef) {

  }

  ngOnInit() {
    this.containerRef.clear();

  }

  ngOnChanges(){
    // if(this.param) {
    //   this.containerRef.createEmbeddedView(this.templateRef);
    // } else {
    //   this.containerRef.clear();
    // }
  }
}
