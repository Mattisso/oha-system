import { TestBed, async, inject } from '@angular/core/testing';

import { NttbalanceGuard } from './nttbalance-guard.service';

describe('NttbalanceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NttbalanceGuard]
    });
  });

  it('should ...', inject([NttbalanceGuard], (guard: NttbalanceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
