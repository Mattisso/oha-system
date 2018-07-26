import { Injectable } from '@angular/core';
import { Http,  Response, Headers, RequestOptions } from '@angular/http';

import { Observable, of } from 'rxjs';
import { tap, map, catchError} from 'rxjs/operators';

import { ApiService } from '../../shared/api.service';
import { IUser } from '../../models/user';
import { MessageService } from '../../messages/message.service';
// import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {

  private baseUrl = 'users';



  constructor( public api: ApiService, private messageService: MessageService) { }
  getUsers(): Observable<IUser[]> {

    return this.api.get(this.baseUrl).pipe(
      // .map(this.extractData)
      tap(data => console.log('getUsers: ' + JSON.stringify(data)))

    );
     // .catch(this.handleError);
  }



  login(credentials): Observable<any> {
   // const headers = new Headers({ 'Content-Type': 'application/json' });
   // const options = new RequestOptions({ headers: headers });

    const url = `${this.baseUrl}/login`;
    return this.api.post(url, credentials).pipe(
        //   .map(this.extractData)
        tap(data => console.log('getUser: ' + JSON.stringify(data)))
        //   .catch(this.handleError);

    );

  }

  countUsers():  Observable<number> {

    const url = `${this.baseUrl}/count`;
    return this.api.get(url).pipe(
  // .map(this.extractData)
  tap(data => console.log('getUser: ' + JSON.stringify(data)))
  //   .catch(this.handleError);
    );

  }
  getUser(id: string): Observable<IUser> {
    if (id === null) {
      return of(this.initializeIUser());
    }
    const url = `${this.baseUrl}/${id}`;
    return this.api.get(url).pipe(
       // .map(this.extractData)
       tap(data => console.log('getUser: ' + JSON.stringify(data)))
       //   .catch(this.handleError);

    );

  }


  deleteUser(id: string): Observable<Response> {
  //  const headers = new Headers({ 'Content-Type': 'application/json' });
 //   const options = new RequestOptions({ headers: headers });

    const url = `${this.baseUrl}/${id}`;
    return this.api.delete(url).pipe(
      tap(data => console.log('deleteUser: ' + JSON.stringify(data)))
      //  .catch(this.handleError);

    );

  }

  saveBalance(user: IUser): Observable<IUser> {
  //  const headers = new Headers({ 'Content-Type': 'application/json' });
  //  const options = new RequestOptions({ headers: headers });

    if (user.id === null) {
      return this.createUser(user);
    }
    return this.updateUser(user);
  }


  private createUser(user: IUser): Observable<IUser> {
    user.id = undefined;
    const url = `${this.baseUrl}/register`;
    return this.api.post(url, user).pipe(
       //     .map(this.extractData)
       tap(data => console.log('createUser: ' + JSON.stringify(data)))
       //   .catch(this.handleError);
    );

  }


  private updateUser(user: IUser): Observable<IUser> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.api.put(url, user).pipe(
      map(() => user),
      tap(data => console.log('updateUser: ' + JSON.stringify(data)))
     // .catch(this.handleError);

    );

  }


  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  initializeIUser(): IUser {
    // Return an initialized object
    return {
      id: null,
      username: null,
      role: null,
      password: null,
      adduser:  null,
      hasitem: null,
      removeItem: null,
      getData:  null
    };
  }
  /*
  private extractData(response: Response) {
    const body = response.json();
    return body.data || {};
  }*/
}
