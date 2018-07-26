import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { INttbalance} from '../../../models';
import { NttbalanceService } from '../nttbalance.service';


@Component({
  selector: 'app-nttbalance-list',
  templateUrl: './nttbalance-list.component.html',
  styleUrls: ['./nttbalance-list.component.scss']
})
export class NttbalanceListComponent implements OnInit {
  pageTitle = 'Balance Sheet List';
  listFilter: string;
  errorMessage: string;

  balances: INttbalance[];

  constructor(private nttbalanceservice: NttbalanceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
    this.nttbalanceservice.getBalances()
        .subscribe( balances => this.balances = balances,
            error => this.errorMessage = <any>error);
  }

}
