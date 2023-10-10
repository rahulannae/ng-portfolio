import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortLibComponent } from './port-lib.component';

describe('PortLibComponent', () => {
  let component: PortLibComponent;
  let fixture: ComponentFixture<PortLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortLibComponent]
    });
    fixture = TestBed.createComponent(PortLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
