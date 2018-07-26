import { TestBed, inject } from '@angular/core/testing';

import { NttcomptebalancesService } from './nttcomptebalance.service';

describe('NttcomptebalancesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NttcomptebalancesService]
    });
  });

  it('should be created', inject([NttcomptebalancesService], (service: NttcomptebalancesService) => {
    expect(service).toBeTruthy();
  }));
});
