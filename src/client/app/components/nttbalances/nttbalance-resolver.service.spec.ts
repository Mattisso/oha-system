import { TestBed, inject } from '@angular/core/testing';

import { NttbalanceResolverService } from './nttbalance-resolver.service';

describe('NttbalanceResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NttbalanceResolverService]
    });
  });

  it('should be created', inject([NttbalanceResolverService], (service: NttbalanceResolverService) => {
    expect(service).toBeTruthy();
  }));
});
