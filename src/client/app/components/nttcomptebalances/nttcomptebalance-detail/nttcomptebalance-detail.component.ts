import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute} from '@angular/router';


import { NttcomptebalancesService } from '../nttcomptebalance.service';
import {Nttcomptebalance, INttcomptebalance , INttcomptebalancedetail} from '../../../models';



@Component({
  selector: 'app-nttcomptebalance-detail',
  templateUrl: './nttcomptebalance-detail.component.html',
  styleUrls: ['./nttcomptebalance-detail.component.css']
})
export class NttcomptebalanceDetailComponent implements OnInit {
  @Input() comptebalance: INttcomptebalance;
  pageTitle = 'nttcomptebalance Detail';
  errorMessage: string;


  constructor(private nttcomptebalancesService: NttcomptebalancesService,
    private route: ActivatedRoute) {
// this.comptebalances= comptebalances;
   }


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getCompteBalance(id);
  }

  getCompteBalance(id: string) {
    this.nttcomptebalancesService.getCompteBalance(id)
        .subscribe( comptebalance => this.comptebalance = comptebalance,
            error => this.errorMessage = <any>error);
  }


}
