import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuardLogin } from './users/_services/auth-guard-login.service';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
imports: [
  RouterModule.forRoot([
    {path: 'welcome', component: WelcomeComponent},
    { path: 'nstbalanceinputs',
  canActivate: [AuthGuardLogin],
    data: { preload: true },
    loadChildren: 'app/components/nstbalanceinputs/nstbalanceinput.module#NstbalanceinputModule' },
    { path: 'nstbalances',
    canActivate: [AuthGuardLogin],
      data: { preload: true },
      loadChildren: 'app/components/nstbalances/nstbalance.module#NstbalanceModule' },
      { path: 'nttbalances',
      canActivate: [AuthGuardLogin],
        data: { preload: true },
        loadChildren: 'app/components/nttbalances/nttbalance.module#NttbalanceModule' },
    { path: 'users',
    // canActivate: [AuthGuardLogin],
      data: { preload: true },
      loadChildren: 'app/users/user.module#UserModule' },
      { path: 'upload',
      // canActivate: [AuthGuardLogin],
      data: { preload: true },
        loadChildren: 'app/fileuploads/fileupload.module#FileuploadModule'},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
  ], {enableTracing: true, preloadingStrategy: SelectiveStrategy})
],
providers: [SelectiveStrategy],
exports: [RouterModule]
})

export  class AppRoutingModule {}



// app/models/nstbalanceinputs/nstbalanceinput.module#NstbalanceinputModule
