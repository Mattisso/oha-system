import { Component, OnDestroy} from '@angular/core';
import { MessageService } from './message.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-message',
 // template: this.newMethod(),
/*styles: [
  '.message-row { margin-bottom: 10px }'
]*/
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent  implements OnDestroy {
  private subscription: Subscription;
    message: any;
    constructor(private messageService: MessageService,
      private router: Router) {

         // subscribe to alert messages
         this.subscription = messageService.getMessage().subscribe(message => { this.message = message; });
       }


      ngOnDestroy(): void {
        // unsubscribe on destroy to prevent memory leaks
        this.subscription.unsubscribe();
    }
/*
  private newMethod(): string {
    return `
  <div class="row">
      <h4 class="col-md-10">Message Log</h4>
      <span class="col-md-2">
          <a class="btn btn-default"
              (click)="close()">
              x
          </a>
      </span>
  </div>
  <div *ngFor="let message of messageService.messages; let i=index">
      <div *ngIf="i<10" class="message-row">
          {{ message }}
      </div>
  </div>
`;
  }*/

  close(): void {
  // Close the popup.
  this.router.navigate([{ outlets: { popup: null } }]);
  // this.messageService.isDisplayed = false;
  }

  }
