import { TestBed } from '@angular/core/testing';

import { PortLibService } from './port-lib.service';

describe('PortLibService', () => {
  let service: PortLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
