import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
 import { catchError, tap, map} from 'rxjs/operators';
import { INttcomptebalance } from '../../models';
import { MessageService } from '../../messages/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NttcomptebalancesService {
  private baseUrl = 'api/nttcomptebalances';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }
  getCompteBalances(): Observable<INttcomptebalance[]> {

    return this.http.get<INttcomptebalance[]>(this.baseUrl)
      .pipe(
        tap(data => this.log('getCompteBalances: ' + JSON.stringify(data)),
catchError(this.handleError('getCompteBalances', [])))
  //  .catch(this.handleError);

      );
    //    .do(data => console.log('getCompteBalances: ' + JSON.stringify(data)));
  }


  getCompteBalance(id: string): Observable<INttcomptebalance> {
    if (id === null) {
      return of(this.initializeINttcomptebalance());
    }
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<INttcomptebalance>(url)
      .pipe(
        map(data => data[0]),
        tap(h => console.log('getCompteBalance: ' + JSON.stringify(h))),
        catchError(this.handleError<INttcomptebalance>(`getCompteBalance id =${id}`))
      );

    //  .do(data => console.log('getCompteBalance: ' + JSON.stringify(data)));
  }

  deleteCompteBalance(comptebalance: INttcomptebalance | string): Observable<INttcomptebalance> {
    const id = typeof comptebalance === 'string' ? comptebalance : comptebalance.id;
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    // const options = new RequestOptions({ headers: headers });


    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<INttcomptebalance>(url).pipe(
      tap(data => this.log('deleteCompteBalance: ' + JSON.stringify(data)),
      catchError(this.handleError<INttcomptebalance>(`deleteBalance`)))
      //   catchError(this.handleError<Hero>('deleteHero'))
    );

    //    .do(data => console.log('deleteCompteBalance: ' + JSON.stringify(data)));
    //  .catch(this.handleError);
  }

  saveCompteBalance(comptebalance: INttcomptebalance): Observable<INttcomptebalance> {
    //  const headers = new Headers({ 'Content-Type': 'application/json' });
    //   const options = new RequestOptions({ headers: headers });

    if (comptebalance.id === null) {
      return this.createCompteBalance(comptebalance);
    }
    return this.updateCompteBalance(comptebalance);
  }

  private createCompteBalance(comptebalance: INttcomptebalance): Observable<INttcomptebalance> {
    comptebalance.id = undefined;
    return this.http.post<INttcomptebalance>(this.baseUrl, comptebalance, httpOptions)
      .pipe(
        tap(data =>  this.log(`createbalance w id=/: ${data.id}`)),
        catchError(this.handleError<INttcomptebalance>('createbalance'))

    );

    // .map(this.extractData)
    //   .do(data => console.log('createCompteBalance: ' + JSON.stringify(data)));
    //  .catch(this.handleError);
  }

  private updateCompteBalance(comptebalance: INttcomptebalance): Observable<INttcomptebalance> {
    const url = `${this.baseUrl}/${comptebalance.id}`;
    return this.http.put<INttcomptebalance>(url, comptebalance, httpOptions)
      .pipe(
        map(() => comptebalance),
        tap(data => console.log('updateCompteBalance: ' + JSON.stringify(data)))
        //     catchError(this.handleError<any>('updateHero'))
      );

    //  .map(() => comptebalance)
    //   .do(data => console.log('updateCompteBalance: ' + JSON.stringify(data)));
    //    .catch(this.handleError);
  }


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


  initializeINttcomptebalance(): INttcomptebalance {
    // Return an initialized object
    return {
      id: null,
      _oreference_id: null,
      _otableauposte_id: null,
      _oexerccompta_id: null,
      totalSoldeDebit: 0,
      totalSoldeCredit: 0,
      CreatedOn: null,
      CreatedBy: null,
      ModifiedOn: null,
      ModifiedBy: null,
      nttcomptebalancedetails: null,
      addComptebalanceDetail: null,
      hasitem: null,
      removeItem: null,
      getData: null,
      getDetailComptebalance: null,
      getTotalSoldedebit: null,
      getTotalSoldecredit: null,
      getOexerccomptaId: null
    };
  }

}
