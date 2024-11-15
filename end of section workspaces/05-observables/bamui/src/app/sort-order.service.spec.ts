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
});
