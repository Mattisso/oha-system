import { Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { INttcomptebalance,  INttcomptebalancedetail} from '../../../models';


@Component({
  selector: 'app-nttcomptebalancedetail',
  templateUrl: './nttcomptebalancedetail-list.component.html',
  styleUrls: ['./nttcomptebalancedetail-list.component.css']
})
export class NttcomptebalancedetailListComponent implements OnChanges {

  @Input()
  comptebalances: INttcomptebalance;
  @Output() close =  new EventEmitter();

   detailsInSelectedCompte: INttcomptebalancedetail[];

  ngOnChanges(changes) {
if (this.comptebalances) {
  this.detailsInSelectedCompte = this.comptebalances.getDetailComptebalance();

} else {
  this.detailsInSelectedCompte = null;
}
  }

closeDetails() {
this.close.emit(null);
}

  constructor() { }

}
