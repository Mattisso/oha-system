import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

 import { catchError, tap, map} from 'rxjs/operators';

import { INstbalanceinput } from '../../models/index';
// import { ApiService } from '../../shared/http.service';
import { MessageService } from '../../messages/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'
// 'Authorization', `Bearer ${this.auth.getToken()}`
})
};

@Injectable({providedIn: 'root'})
export class NstbalanceinputService {
  private baseUrl =  'api/nstbalanceinputs'; // environment.baseUrl;

  constructor( private http: HttpClient,
  private messageService: MessageService ) { }

  getBalances(): Observable<INstbalanceinput[]> {

    return this.http.get<INstbalanceinput[]>(this.baseUrl).pipe(
  // .map(this.extractData)
  tap(data => this.log('getBalances: ' + JSON.stringify(data)),
catchError(this.handleError('getBalances', [])))
  //  .catch(this.handleError);
    );
  }

  getHeroNo404<Data>(id: string): Observable<INstbalanceinput> {
    const url = `${this.baseUrl}/?id=${id}`;
    return this.http.get<INstbalanceinput[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<INstbalanceinput>(`getHero id =${id}`))
      );
  }


  getBalance(id: string): Observable<INstbalanceinput> {
    if (id === null) {
      return of(this.initializeINstbalanceinput());
    }
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<INstbalanceinput>(url).pipe(
          //  .map(this.extractData)
          tap(data => this.log('getBalance: ' + JSON.stringify(data))),
          catchError(this.handleError<INstbalanceinput>(`getBalance id =${id}`))
          // .catch(this.handleError);

    );

  }

  deleteBalance( balance: INstbalanceinput | string): Observable<INstbalanceinput> {
 //   const headers = new Headers({ 'Content-Type': 'application/json' });
   // const options = new RequestOptions({ headers: headers });
   const id = typeof balance === 'string' ? balance : balance.id;

    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<INstbalanceinput>(url).pipe(
      tap(_ => this.log(`deleted BalanceInput id:  ${id}`)),
      catchError(this.handleError<INstbalanceinput>(`deleteBalance`))

    );

  }


  saveBalance(balance: INstbalanceinput): Observable<INstbalanceinput> {
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   const options = new RequestOptions({ headers: headers });

    if (balance.id === null) {
      return this.createBalance(balance);
    }
    return this.updateBalance(balance);
  }

  private createBalance(balance: INstbalanceinput): Observable<INstbalanceinput> {
    balance.id = undefined;
    return this.http.post<INstbalanceinput>(this.baseUrl, balance, httpOptions).pipe(
          // .map(this.extractData)
          tap((data: INstbalanceinput) => this.log(`createBalanceinput w id=/: ${data.id}`)),
          catchError(this.handleError<INstbalanceinput>('createbalance'))
          //  .catch(this.handleError);

    );

  }

  private updateBalance(balance: INstbalanceinput): Observable<any> {
    const url = `${this.baseUrl}/${balance.id}`;
    return this.http.put<INstbalanceinput>(url, balance, httpOptions).pipe(
      map(() => balance),
      tap(_ => this.log(`updated Balanceinput id: ${balance.id}`))
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

 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    this.log(`${operation} failed: ${error.message}`);

   return of(result as T);
  };
}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.addMessage(`HeroService: ${message}`);
  }

  initializeINstbalanceinput(): INstbalanceinput {
    // Return an initialized object
    return {
      id: null,
      NumCompte: null,
      IntitulCompte: null,
      SoldeDebit: null,
      SoldeCredit: null,
      addbalanceinput: null,
      hasitem: null,
      removeItem: null,
      getData: null,
      CreatedOn: null,
      CreatedBy: null,
      ModifiedOn: null,
      ModifiedBy: null
    };
  }
/*
  private extractData(response: Response) {
    const body = response.json();
    return body.data || {};
  }*/
}
