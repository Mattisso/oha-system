import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NstbalanceinputListComponent, NstbalanceinputDetailComponent, NstbalanceinputEditComponent} from './_components';



// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import {BalanceData} from './nstbalanceinputdata';

//  import { ConvertToSpacesPipe } from '../../shared/ConvertToSpacesPipe';
// import { NstbalanceinputDetailGuard,NstbalanceinputEditGuard} from './nstbalanceinput-guard.service';
import { NstbalanceinputService } from './nstbalanceinput.service';
import { NstbalanceinputResolverService } from './nstbalanceinput-resolver.service';
// import { AuthGuard } from '../user/auth-guard.service';

import { SharedModule } from '../../shared/shared.module';
import { NstbalanceinputFilterPipe } from './nstbalanceinput-filter.pipe';
import { NstbalanceinputEditGuard } from './nstbalanceinput-guard.service';


@NgModule({
  imports: [
    SharedModule,
   ReactiveFormsModule,
      //   InMemoryWebApiModule.forRoot(BalanceData),
    RouterModule.forChild([
      {
        path: '',
        component: NstbalanceinputListComponent,
      },
      {
        path: ':id',
    //  canActivate: [NstbalanceinputDetailGuard],
        component: NstbalanceinputDetailComponent,
        resolve: { balance: NstbalanceinputResolverService }
      },

      {
        path: ':id/edit',
        component: NstbalanceinputEditComponent,
      canDeactivate: [NstbalanceinputEditGuard],
      resolve: { balance: NstbalanceinputResolverService }
    }
      ])

  ],
  declarations: [
    NstbalanceinputListComponent,
    NstbalanceinputDetailComponent,
    NstbalanceinputEditComponent,
   // ConvertToSpacesPipe,
    NstbalanceinputFilterPipe
  ],

    providers: [NstbalanceinputService
      , NstbalanceinputEditGuard
   //   ,NstbalanceinputDetailGuard
      , NstbalanceinputResolverService
    ]

})
export class NstbalanceinputModule { }
