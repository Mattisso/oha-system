import { TestBed, async, inject } from '@angular/core/testing';

import { NstbalanceinputDetailGuard } from './nstbalanceinput-guard.service';

describe('NstbalanceinputGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NstbalanceinputDetailGuard]
    });
  });

  it('should ...', inject([NstbalanceinputDetailGuard], (guard: NstbalanceinputDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
