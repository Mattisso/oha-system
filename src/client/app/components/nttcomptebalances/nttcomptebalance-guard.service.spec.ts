import { TestBed, async, inject } from '@angular/core/testing';

import { NttcomptebalancesGuard } from './nttcomptebalance-guard.service';

describe('NttcomptebalancesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NttcomptebalancesGuard]
    });
  });

  it('should ...', inject([NttcomptebalancesGuard], (guard: NttcomptebalancesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
