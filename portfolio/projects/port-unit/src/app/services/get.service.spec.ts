import { TestBed } from '@angular/core/testing';

import { GetService } from './get.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MOCK_DATA } from '../helpers/mock';

describe('GetService', () => {
  let service: GetService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    // httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GetService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get users', () => {
    service.getData().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(6);
    });
    const mockReq = testingController.expectOne('api/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(MOCK_DATA);
    // ensure no other http call is made
    // testingController.verify();
  });

  afterEach(() => {
    testingController.verify();
  });
});
