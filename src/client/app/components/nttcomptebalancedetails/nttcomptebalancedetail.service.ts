import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../../messages/message.service';
import { NttcomptebalancesService } from '../../components/nttcomptebalances/nttcomptebalance.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


import {INttcomptebalance, INttcomptebalancedetail } from '../../models';



@Injectable()
export class NttcomptebalancedetailService {
  private baseUrl = '/api/nttcomptebalancedetails';
  INttcomptebalance$: Observable<INttcomptebalance>;

  constructor(private http: HttpClient,
    private messageService: MessageService, private comptebalaceService: NttcomptebalancesService) { }

  getCompteBalanceDetails(): Observable<INttcomptebalancedetail[]> {

    return this.http.get<INttcomptebalancedetail[]>(this.baseUrl)
    .pipe(
      tap( data => console.log('getCompteBalances: ' + JSON.stringify(data)))

      );
   //    .do(data => console.log('getCompteBalances: ' + JSON.stringify(data)));

  }


}
