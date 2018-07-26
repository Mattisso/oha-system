import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Nttcomptebalance, INttcomptebalance , INttcomptebalancedetail} from '../../../models';



import { NttcomptebalancesService } from '../nttcomptebalance.service';

@Component({
  selector: 'app-nttcomptebalance-list',
  templateUrl: './nttcomptebalance-list.component.html',
  styleUrls: ['./nttcomptebalance-list.component.css']
})
export class NttcomptebalanceListComponent implements OnInit {
  pageTitle = 'CompteBalance  List';
  listFilter: string;
  errorMessage: string;
comptebalances: INttcomptebalance[];
// nttcomptebalance : Nttcomptebalance[];
detailsInSelectedCompte: INttcomptebalancedetail[];
selectedecomptebalance: INttcomptebalance[];

constructor(private nttcomptebalancesService: NttcomptebalancesService,
    private route: ActivatedRoute) {
// this.comptebalances= comptebalances;
   }

  ngOnInit() {

    this.getCompteBalances();

  }

  getCompteBalances(): void  {
    this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
    this.nttcomptebalancesService.getCompteBalances()
        .subscribe( comptebalances => this.comptebalances = comptebalances,
            error => this.errorMessage = <any>error);
  }

public viewDetails(nttcomptebalance: Nttcomptebalance) {
this.detailsInSelectedCompte = nttcomptebalance.getDetailComptebalance();
}



}
