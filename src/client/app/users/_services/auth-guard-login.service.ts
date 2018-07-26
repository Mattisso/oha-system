import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad, Router, Route } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardLogin implements CanActivate, CanLoad {
  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      return this.authService.loggedIn;
  }


  canLoad(route: Route): boolean {
    return this.checkLoggedIn(route.path);
    }

    checkLoggedIn(url: string): boolean {
      if (this.authService.loggedIn) {
          return true;
      }
      this.authService.redirectUrl = url;
      this.router.navigate(['/']);
      return false;
    }
}
