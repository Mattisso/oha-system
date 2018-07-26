import { Component } from '@angular/core';
// import { NstbalanceinputService } from '../app/components/nstbalanceinputs/nstbalanceinput.service';


import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { AuthService } from './users/_services/auth.service';
import { MessageService } from './messages/message.service';

@Component({
  selector: 'app-oha',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Accounting Systeme Ohada';
  loading = true;

    constructor(public authService: AuthService,
      private router: Router,
      private messageService: MessageService) {
      router.events.subscribe((routerEvent: Event) => {
        this.checkRouterEvent(routerEvent);
      });

    }
    checkRouterEvent(routerEvent: Event): void {
  if (routerEvent instanceof NavigationStart) {
  this.loading = true;
  }



        if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError) {
          this.loading = false;
        }
    }

    displayMessages(): void {
      this.router.navigate([{ outlets: { popup: ['messages'] } }]);
      this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
      this.router.navigate([{ outlets: { popup: null } }]);
      this.messageService.isDisplayed = false;
  }

  logOut(): void {
      this.authService.logout();
      this.router.navigateByUrl('/welcome');
  }


}
