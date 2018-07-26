import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { INstbalance } from '../../../models/nstbalance';
import { NstbalanceService } from '../nstbalance.service';


@Component({
  selector: 'app-nstbalance-detail',
  templateUrl: './nstbalance-detail.component.html',
  styleUrls: ['./nstbalance-detail.component.scss']
})
export class NstbalanceDetailComponent implements OnInit {
  pageTitle = 'Balance Sheet Detail';
  balance: INstbalance;
  errorMessage: string;

  constructor(private balanceService: NstbalanceService,
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
