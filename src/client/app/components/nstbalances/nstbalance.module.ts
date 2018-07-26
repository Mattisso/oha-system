import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NstbalanceListComponent, NstbalanceDetailComponent, NstbalanceEditComponent} from '.';

import { NstbalancePipe } from './nstbalance.filter.pipe';

import { NstbalanceService } from './nstbalance.service';
import { NstbalanceResolverService } from './nstbalance-resolver.service';
// import { AuthGuard } from '../user/auth-guard.service';

import { SharedModule } from '../../shared/shared.module';
import { NstbalanceEditGuard } from './nstbalance-guard.service';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
   //   InMemoryWebApiModule.forRoot(BalanceData),
     RouterModule.forChild([
       {
         path: '',
         component: NstbalanceListComponent,
       },
       {
         path: ':id',
     //  canActivate: [NstbalanceDetailGuard],
         component: NstbalanceDetailComponent,
         resolve: { balance: NstbalanceResolverService }
       },

       {
         path: ':id/edit',
         component: NstbalanceEditComponent,
       canDeactivate: [NstbalanceEditGuard],
       resolve: { balance: NstbalanceResolverService }
     }
       ])

   ],
   declarations: [
     NstbalanceListComponent,
     NstbalanceDetailComponent,
     NstbalanceEditComponent,
   //   ConvertToSpacesPipe,
     NstbalancePipe
   ],

     providers: [NstbalanceService
       , NstbalanceEditGuard
    //  ,NstbalanceDetailGuard
       , NstbalanceResolverService
     ]

 })
export class NstbalanceModule { }
