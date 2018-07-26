import { TestBed, inject } from '@angular/core/testing';

import { NttbalanceService } from './nttbalance.service';

describe('NttbalanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NttbalanceService]
    });
  });

  it('should be created', inject([NttbalanceService], (service: NttbalanceService) => {
    expect(service).toBeTruthy();
  }));
});
