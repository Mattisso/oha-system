import { TestBed, inject } from '@angular/core/testing';

import { NstbalanceService } from './nstbalance.service';

describe('NstbalanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NstbalanceService]
    });
  });

  it('should be created', inject([NstbalanceService], (service: NstbalanceService) => {
    expect(service).toBeTruthy();
  }));
});
