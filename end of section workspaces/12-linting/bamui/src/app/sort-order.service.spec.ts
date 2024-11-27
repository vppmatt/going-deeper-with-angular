import { TestBed } from '@angular/core/testing';

import { SortOrderService } from './sort-order.service';

describe('SortOrderService', () => {
  let service: SortOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calling handle click with a value of 2 will emit a sort order event with a value of 2', () => {
    let emittedValue  = -1;
    service.sortOrderEvents.subscribe(value => emittedValue = value);
    service.handleClick(2);
    expect(emittedValue).toBe(2);
  });
});
