import { TestBed } from '@angular/core/testing';

import { StockreceiveService } from './stockreceive.service';

describe('StockreceiveService', () => {
  let service: StockreceiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockreceiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
