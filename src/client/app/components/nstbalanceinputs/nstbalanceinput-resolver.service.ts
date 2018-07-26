import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import {map, catchError} from 'rxjs/operators';


import { NstbalanceinputService } from './nstbalanceinput.service';
import { INstbalanceinput } from '../../models/nstbalanceinput';

@Injectable()
export class NstbalanceinputResolverService {

  constructor(private nstbalanceinputService: NstbalanceinputService,
    private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<INstbalanceinput> {
      const id = route.params['id'];
      if (isNaN(id)) {
          console.log(`balance id was not a number: ${id}`);
          this.router.navigate(['/nstbalanceinputs']);
          return of(null);
      }
      return this.nstbalanceinputService.getBalance(id).pipe(
        map(balance => {
            if (balance) {
                return balance;
            }
            console.log(`balance was not found: ${id}`);
            this.router.navigate(['/nstbalanceinputs']);
            return null;
        }),
        catchError(error => {
            console.log(`Retrieval error: ${error}`);
            this.router.navigate(['/nstbalanceinputs']);
            return of(null);
        })

      );

  }

}
