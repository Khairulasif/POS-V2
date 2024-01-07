import { TestBed } from '@angular/core/testing';

import { AvailableproductService } from './availableproduct.service';

describe('AvailableproductService', () => {
  let service: AvailableproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
