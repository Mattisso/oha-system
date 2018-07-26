import { TestBed, async, inject } from '@angular/core/testing';

import { NstbalanceGuard } from './nstbalance-guard.service';

describe('NstbalanceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NstbalanceGuard]
    });
  });

  it('should ...', inject([NstbalanceGuard], (guard: NstbalanceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
