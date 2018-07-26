import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable, of } from 'rxjs';
 import { tap, map} from 'rxjs/operators';

import { INstbalance } from '../../models';
import { ApiService } from '../../shared/api.service';

@Injectable()
export class NstbalanceService {
  private baseUrl = 'nstbalances';


  constructor(public api: ApiService ) { }

  getBalances(): Observable<INstbalance[]> {

    return this.api.get(this.baseUrl).pipe(
       // map(this.extractData)
       tap(data => console.log('getBalances: ' + JSON.stringify(data)))
       //  .catch(this.handleError);

    );

  }

  getBalance(id: string): Observable<INstbalance> {
    if (id === null) {
      return of(this.initializeINstbalance());
    }
    const url = `${this.baseUrl}/${id}`;
    return this.api.get(url).pipe(
          //  map(this.extractData)
          tap(data => console.log('getBalance: ' + JSON.stringify(data)))
          // .catch(this.handleError);

    );

  }

  deleteBalance(id: string): Observable<Response> {
 //   const headers = new Headers({ 'Content-Type': 'application/json' });
   // const options = new RequestOptions({ headers: headers });

    const url = `${this.baseUrl}/${id}`;
    return this.api.delete(url).pipe(
      tap(data => console.log('deleteBalance: ' + JSON.stringify(data)))
      //   .catch(this.handleError);

    );

  }


  saveBalance(balance: INstbalance): Observable<INstbalance> {
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   const options = new RequestOptions({ headers: headers });

    if (balance.id === null) {
      return this.createBalance(balance);
    }
    return this.updateBalance(balance);
  }

  private createBalance(balance: INstbalance): Observable<INstbalance> {
    balance.id = undefined;
    return this.api.post(this.baseUrl, balance).pipe(
         // map(this.extractData)
         tap(data => console.log('createBalance: ' + JSON.stringify(data)))
         //  .catch(this.handleError);

    );

  }

  private updateBalance(balance: INstbalance): Observable<INstbalance> {
    const url = `${this.baseUrl}/${balance.id}`;
    return this.api.put(url, balance).pipe(
      map(() => balance),
      tap(data => console.log('updateBalance: ' + JSON.stringify(data)))
        //    .catch(this.handleError);
    );

  }




/*
  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  */
  initializeINstbalance(): INstbalance {
    // Return an initialized object
    return {
      id: null,
    _oexerccompta_id: null,
    _otableauposte_id : null,
   _oreference_id : null,
   _ocompte_id : null,
    NumCompte: null,
    IntitulCompte: null,
    SoldeDebit: null,
    SoldeCredit: null,
    addnstbalance: null,
    hasitem: null,
    removeItem: null,
    getData: null,
    CreatedOn: null,
    CreatedBy: null,
    ModifiedOn: null,
    ModifiedBy: null
    };
  }

}
