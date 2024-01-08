import { TestBed } from '@angular/core/testing';

import { ShowproductService } from './showproduct.service';

describe('ShowproductService', () => {
  let service: ShowproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
