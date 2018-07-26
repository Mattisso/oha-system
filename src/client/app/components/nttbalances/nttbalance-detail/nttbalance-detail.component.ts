import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { INttbalance } from '../../../models/nttbalance';
import { NttbalanceService } from '../nttbalance.service';


@Component({
  selector: 'app-nttbalance-detail',
  templateUrl: './nttbalance-detail.component.html',
  styleUrls: ['./nttbalance-detail.component.scss']
})
export class NttbalanceDetailComponent implements OnInit {
  pageTitle = 'Balance Sheet Detail';
  balance: INttbalance;
  errorMessage: string;

  constructor(private balanceService: NttbalanceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
const id = this.route.snapshot.params['id'];
this.getBalance(id);

  }
  getBalance(id: string) {
    this.balanceService.getBalance(id).subscribe(
      balance => this.balance = balance,
      error => this.errorMessage = <any>error);
  }


}
