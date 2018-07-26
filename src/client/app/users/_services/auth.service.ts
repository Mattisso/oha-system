import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
 import { IUser } from '../../models';
import { MessageService } from '../../messages/message.service';
import { UserService} from '../_services/user.service';


@Injectable()
export class AuthService {
  currentUser: IUser = this.initializeIUser();
  redirectUrl: string;
  loggedIn = false;
  isAdmin = false;
  private baseUrl = 'users/login';

  storageKey = 'contact-manager-jwt';
  constructor(private messageService: MessageService,
    private route: ActivatedRoute,  private router: Router,
  private userservice: UserService,
  private jwtHelper: JwtHelperService) {

      const token = localStorage.getItem('token');
      if (token) {
        const decodedUser = this.decodeUserFromToken(token);
        this.setCurrentUser(decodedUser);
      }
    }

   login(usernameAndPassword) {
    return this.userservice.login(usernameAndPassword).pipe(
      map(
        res => {
          localStorage.setItem('token', res.token);
          const decodedUser = this.decodeUserFromToken(res.token);
          this.setCurrentUser(decodedUser);
          return this.loggedIn;
        }
      )

    );


  }


  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token);
  }

  setCurrentUser(decodedUser) {
    this.loggedIn = true;
    this.currentUser.id = decodedUser.id;
    this.currentUser.username = decodedUser.username;
    this.currentUser.role = decodedUser.role;
    decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    delete decodedUser.role;
  }

/*
  logout(): void {
    localStorage.removeItem('currentUser');

  }*/

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn() {
   /* let token = this.getToken();
    if(token) {
      const payload = JSON.parse(token.split('.')[1]);
      return payload.exp> Date.now()/10000;

    } else {
      return false;
    }
*/

   return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = this. initializeIUser();
    this.router.navigate(['users/login']);
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

}
