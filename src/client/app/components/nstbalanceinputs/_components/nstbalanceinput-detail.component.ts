import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { INstbalanceinput } from '../../../models/nstbalanceinput';
import { NstbalanceinputService } from '../nstbalanceinput.service';


@Component({
  templateUrl: './nstbalanceinput-detail.component.html',
  styleUrls: ['./nstbalanceinput-detail.component.css']
})
export class NstbalanceinputDetailComponent implements OnInit {
  pageTitle = 'Balance Sheet Detail';
  balance: INstbalanceinput;
  errorMessage: string;

    constructor(private balanceInputService: NstbalanceinputService,
      private route: ActivatedRoute) { }

    ngOnInit(): void {
  const id = this.route.snapshot.params['id'];
  this.getBalance(id);

    }
    getBalance(id: string) {
      this.balanceInputService.getBalance(id).subscribe(
        balance => this.balance = balance,
        error => this.errorMessage = <any>error);
    }

    /* this.router.navigate(['/nstbalanceinputs']),
    { queryParamsHandling: 'preserve'}; */


  }
