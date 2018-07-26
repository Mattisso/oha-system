import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INstbalanceinput } from '../../../models/nstbalanceinput';
import { NstbalanceinputService } from '../nstbalanceinput.service';

@Component({
  selector: 'app-nstbalanceinput-list',
  templateUrl: './nstbalanceinput-list.component.html',
  styleUrls: ['./nstbalanceinput-list.component.css']
})
export class NstbalanceinputListComponent implements OnInit {
  pageTitle = 'Balance Sheet List';
  listFilter: string;
  errorMessage: string;

  balances: INstbalanceinput[];
      constructor(private balanceinputservice: NstbalanceinputService,
      private route: ActivatedRoute) {  }

      ngOnInit(): void {
        this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        this.balanceinputservice.getBalances()
            .subscribe( balances => this.balances = balances,
                error => this.errorMessage = <any>error);
      }
  }
