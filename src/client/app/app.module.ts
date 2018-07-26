import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { JwtModule } from '@auth0/angular-jwt';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// import { BalanceData } from './models/nstbalanceinputs/nstbalanceinputdata';

import { AppRoutingModule } from './app-routing.module';
 import { UserService } from './users/_services/user.service';
 import { AuthService } from './users/_services/auth.service';
 import { ApiService } from '../app/shared/api.service';
 import { AuthGuardAdmin } from './users/_services/auth-guard-admin.service';
 import { AuthGuardLogin } from './users/_services/auth-guard-login.service';
  import { UserModule } from './users/user.module';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
 import { PageNotFoundComponent } from './page-not-found.component';




/* Feature Modules */
import { MessageModule} from './messages/message.module';


export function tokenGetter() {
  return localStorage.getItem('token');
}



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    UserModule,

// ConvertoSpacePipeModule,
  //  InMemoryWebApiModule.forRoot(BalanceData, {delay: 1000}),
// NstbalanceinputModule,
MessageModule,
AppRoutingModule,
HttpClientModule,
JwtModule.forRoot({
  config: {
    tokenGetter: tokenGetter,
     whitelistedDomains: ['localhost:3000/welcome', 'localhost:4200'],
  //   blacklistedRoutes: ['localhost:3000/auth']
  }
})
  ],

  declarations: [
    AppComponent,
   WelcomeComponent,
    PageNotFoundComponent

   // NstbalanceListComponent,
   // NstbalanceEditComponent,
  //  NstbalanceDetailComponent

  //  FileUploadComponent
  // NttcomptebalanceListComponent
  ],

 providers: [UserService,
  ApiService,
   AuthService,
   AuthGuardAdmin, AuthGuardLogin],
   bootstrap: [AppComponent]
})
export class AppModule { }
