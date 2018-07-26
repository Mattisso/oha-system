import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NttcomptebalanceListComponent, NttcomptebalanceDetailComponent, NttcomptebalancesEditComponent } from '.';

// Imports for loading & configuring the in-memory web api


// import { ConvertToSpacesPipe } from '../../shared/ConvertToSpacesPipe';
import { NttcomptebalancesService } from './nttcomptebalance.service';
import { SharedModule } from '../../shared/shared.module';
 // import { NstbalanceinputResolverService } from './nttcomptebalance-resolver.service';


import { NttcomptebalanceFilterPipe } from './nttcomptebalance-filter.pipe';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {
        path: '',
        component: NttcomptebalanceListComponent,
      },
      {
        path: ':id',
    //  canActivate: [NstbalanceinputDetailGuard],
        component: NttcomptebalanceDetailComponent,
// resolve: { balance: NstbalanceinputResolverService }
      },

      {
        path: ':id/edit',
        component: NttcomptebalancesEditComponent
     // canDeactivate: [NstbalanceinputEditGuard],
    //  resolve: { balance: NstbalanceinputResolverService }
    }
      ])

  ],


  declarations: [NttcomptebalanceListComponent,
     NttcomptebalanceDetailComponent,
     NttcomptebalancesEditComponent,
     NttcomptebalanceFilterPipe

     ]
})
export class NttcomptebalanceModule { }
