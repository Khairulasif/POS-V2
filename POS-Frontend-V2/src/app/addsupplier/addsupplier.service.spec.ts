import { TestBed } from '@angular/core/testing';

import { AddsupplierService } from './addsupplier.service';

describe('AddsupplierService', () => {
  let service: AddsupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddsupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
