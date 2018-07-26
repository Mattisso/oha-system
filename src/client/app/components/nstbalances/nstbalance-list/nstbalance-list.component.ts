import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { INstbalance} from '../../../models';
import { NstbalanceService } from '../nstbalance.service';


@Component({
  selector: 'app-nstbalance-list',
  templateUrl: './nstbalance-list.component.html',
  styleUrls: ['./nstbalance-list.component.scss']
})
export class NstbalanceListComponent implements OnInit {
  pageTitle = 'Balance Sheet List';
  listFilter: string;
  errorMessage: string;

  balances: INstbalance[];

  constructor(private nstbalanceservice: NstbalanceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
    this.nstbalanceservice.getBalances()
        .subscribe( balances => this.balances = balances,
            error => this.errorMessage = <any>error);
  }

}
