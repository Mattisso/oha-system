import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class NttcomptebalancesGuard implements CanActivate {
constructor(private router: Router) {}
  canActivate(
    router: ActivatedRouteSnapshot): boolean {
const id = +router.url[1].path;
if (isNaN(id) || id !== 1) {
alert('Invalide comptebalance id');
this.router.navigate(['/nttcomptebalances']);
return false;
}
return true;
    }

}

/*

@Injectable()
export  class NstbalanceinputEditGuard implements CanDeactivate<NstbalanceinputEditComponent> {

    canDeactivate(component: NstbalanceinputEditComponent): boolean {
        if (component.nstbalanceinputForm.dirty) {
            let intitulCompte = component.nstbalanceinputForm.get('IntitulCompte').value || 'New Balance';
            return confirm(`Navigate away and lose all changes to ${intitulCompte}?`);
        }
        return true;
    }
}*/
