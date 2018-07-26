import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { NstbalanceEditComponent } from '.';

@Injectable()
export class NstbalanceGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid balance sheet Id');
      // start a new navigation to redirect to list page
      this.router.navigate(['/nstbalances']);

      return false;
    }


    return true;
  }

}

@Injectable()
export class NstbalanceEditGuard implements CanDeactivate<NstbalanceEditComponent> {

  canDeactivate(component: NstbalanceEditComponent): boolean {
    if (component.nstbalanceForm.dirty) {
      const intitulCompte = component.nstbalanceForm.get('IntitulCompte').value || 'New Balance';
      return confirm(`Navigate away and lose all changes to ${intitulCompte}?`);
    }
    return true;
  }
}
