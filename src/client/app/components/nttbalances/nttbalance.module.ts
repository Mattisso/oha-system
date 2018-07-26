import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NttbalanceListComponent, NttbalanceDetailComponent, NttbalanceEditComponent} from '.';

import { NttbalancePipe } from './nttbalance-filter.pipe';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import {BalanceData} from './nttbalancedata';

// import { ConvertToSpacesPipe } from '../../shared/ConvertToSpacesPipe';
// import { NttbalanceDetailGuard,NttbalanceEditGuard} from './nttbalance-guard.service';
import { NttbalanceService } from './nttbalance.service';
import { NttbalanceResolverService } from './nttbalance-resolver.service';
// import { AuthGuard } from '../user/auth-guard.service';

import { SharedModule } from '../../shared/shared.module';
import { NttbalanceEditGuard } from './nttbalance-guard.service';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
   //   InMemoryWebApiModule.forRoot(BalanceData),
     RouterModule.forChild([
       {
         path: '',
         component: NttbalanceListComponent,
       },
       {
         path: ':id',
     //  canActivate: [NttbalanceDetailGuard],
         component: NttbalanceDetailComponent,
         resolve: { balance: NttbalanceResolverService }
       },

       {
         path: ':id/edit',
         component: NttbalanceEditComponent,
       canDeactivate: [NttbalanceEditGuard],
       resolve: { balance: NttbalanceResolverService }
     }
       ])

   ],
   declarations: [
     NttbalanceListComponent,
     NttbalanceDetailComponent,
     NttbalanceEditComponent,
   //  ConvertToSpacesPipe,
     NttbalancePipe
   ],

     providers: [NttbalanceService
       , NttbalanceEditGuard
    //  ,NttbalanceDetailGuard
       , NttbalanceResolverService
     ]

 })
export class NttbalanceModule { }
