import { TestBed, async, inject } from '@angular/core/testing';

import { NttcomptebalancedetailServiceGuard } from './nttcomptebalancedetail-guard.service';

describe('NttcomptebalancedetailServiceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NttcomptebalancedetailServiceGuard]
    });
  });

  it('should ...', inject([NttcomptebalancedetailServiceGuard], (guard: NttcomptebalancedetailServiceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
