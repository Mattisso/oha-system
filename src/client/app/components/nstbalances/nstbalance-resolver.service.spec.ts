import { TestBed, inject } from '@angular/core/testing';

import { NstbalanceResolverService } from './nstbalance-resolver.service';

describe('NstbalanceResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NstbalanceResolverService]
    });
  });

  it('should be created', inject([NstbalanceResolverService], (service: NstbalanceResolverService) => {
    expect(service).toBeTruthy();
  }));
});
