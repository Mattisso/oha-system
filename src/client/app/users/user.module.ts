
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import {HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login';
import { UserService} from './_services/user.service';
import { AuthGuardLogin } from './_services/auth-guard-login.service';
import { AuthGuardAdmin } from './_services/auth-guard-admin.service';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helper';
import { AuthService} from './_services/auth.service';


import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register';
// import { WelcomeComponent } from '../home/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';

/*
export function tokenGetter() {
  return localStorage.getItem('token');
}*/

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    /*JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
         whitelistedDomains: ['localhost:3000', 'localhost:4200'],
         blacklistedRoutes: ['localhost:3000/auth']
      }
    }),*/
    RouterModule.forChild([
// { path: '', component: WelcomeComponent, canActivate: [AuthGuardLogin] },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
       // otherwise redirect to home
    { path: '**', redirectTo: '' },

    ])
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    AccountComponent
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    UserService,
    AuthGuardAdmin,
    JwtInterceptorProvider,
    ErrorInterceptorProvider
  ]
})


export class UserModule { }
