import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { NttbalanceEditComponent } from '.';

@Injectable()
export class NttbalanceGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid balance sheet Id');
      // start a new navigation to redirect to list page
      this.router.navigate(['/nttbalances']);

      return false;
    }


    return true;
  }

}

@Injectable()
export class NttbalanceEditGuard implements CanDeactivate<NttbalanceEditComponent> {

  canDeactivate(component: NttbalanceEditComponent): boolean {
    if (component.nttbalanceForm.dirty) {
      const intitulCompte = component.nttbalanceForm.get('IntitulCompte').value || 'New Balance';
      return confirm(`Navigate away and lose all changes to ${intitulCompte}?`);
    }
    return true;
  }
}
