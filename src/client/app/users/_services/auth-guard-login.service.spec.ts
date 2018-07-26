import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuardLogin } from './auth-guard-login.service';

describe('AuthGuardLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardLogin]
    });
  });

  it('should ...', inject([AuthGuardLogin], (guard: AuthGuardLogin) => {
    expect(guard).toBeTruthy();
  }));
});
