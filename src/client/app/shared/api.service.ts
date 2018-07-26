
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, RequestMethod, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService  } from '../users/_services/auth.service';

import { MessageService } from '../messages/message.service';


@Injectable()
export class ApiService {
  private baseUrl = environment.apiUrl;
  constructor(private http: Http) { }
  get(url: string) {
    return this.request(url, RequestMethod.Get);
  }

  post(url: string, body: Object) {
    return this.request(url, RequestMethod.Post, body);
  }

  put(url: string, body: Object) {
    return this.request(url, RequestMethod.Put, body);
  }

  delete(url: string) {
    return this.request(url, RequestMethod.Delete);
  }

  request(url: string, method: RequestMethod, body?: Object) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
  //  headers.append('Authorization', `Bearer ${this.auth.getToken()}`);

    const requestOptions = new RequestOptions({
      url: `${this.baseUrl}/${url}`,
      method: method,
      headers: headers
    });

    if (body) {
      requestOptions.body = body;
    }

    const request = new Request(requestOptions);

    return this.http.request(request).pipe(
      map(this.extractData),

      catchError(this.handleError)

    );

  }
/*
  private onRequestError(res: Response): Observable<any> {
    const statusCode = res.status;
    const body = res.json();

    const error = {
      statusCode: statusCode,
      error: body.error
    };

    console.error(error);

    return Observable.throw(error);
  }*/

  private extractData(response: Response) {
    const body = response.json();
    return body.data || {};
  }
  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


}
