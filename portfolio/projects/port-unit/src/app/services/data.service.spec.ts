import { TestBed } from "@angular/core/testing";
import { DataService } from "./data.service";
import { SharedService } from "./shared.service";

describe('DataService', () => {
  let shared: SharedService;
  let data: DataService;
  beforeEach(() => {
    // shared = new SharedService();
    // data = new DataService(shared);
    shared = jasmine.createSpyObj('SharedService', ['someAction']);
    TestBed.configureTestingModule({
      // providers: [DataService, SharedService]
      providers: [DataService, { provide: SharedService, useValue: shared }]
    });
    shared = TestBed.inject(SharedService);
    data = TestBed.inject(DataService);
  });

  it('should multiply two numbers', () => {
    const result = data.multiply(2, 3);
    expect(result).toBe(2 * 3);
  });

  it('should add two numbers', () => {
    const result = data.add(2, 3);
    expect(result).toBe(2 + 3);
  });

  xit('should call shared function', () => {
    // const shared = new SharedService();
    const shared = jasmine.createSpyObj('SharedService', ['someAction']);
    // spyOn(shared, 'someAction');
    // spyOn(shared, 'someAction').and.callThrough();
    const data = new DataService(shared);
    const result = data.multiply(2,3);
    expect(shared.someAction).toHaveBeenCalled();
  });
});