// import { nttCompteBalance } from '../../../server/omodels/nttcomptebalance';

// let nttCompteBalance = require('../../../server//index');



import { INttcomptebalancedetail } from '.';


export interface INttcomptebalance  {
  nttcomptebalancedetails: INttcomptebalancedetail[];
  id: string;
  _oreference_id: string;
  _otableauposte_id: string;
  _oexerccompta_id: string;
  totalSoldeDebit?: number;
  totalSoldeCredit?: number;
  CreatedOn?: Date;
  CreatedBy?: string;
  ModifiedOn?: Date;
  ModifiedBy?: string;
  addComptebalanceDetail: (objdata: any) => void;
  hasitem: (objdata: any) => boolean;
  removeItem: (objdata: any) => void;
  getData: () => void;
  getDetailComptebalance();
  getTotalSoldedebit(): number;
  getTotalSoldecredit(): number;
  getOexerccomptaId(): string;
}


export class Nttcomptebalance implements INttcomptebalance {

  addComptebalanceDetail: (objdata) => void;
  hasitem: (objdata: any) => boolean;
  removeItem: (objdata: any) => void;
  getData: () => void;

  id: string;
  _oreference_id: string;
  _otableauposte_id: string;
  _oexerccompta_id: string;
  nttcomptebalancedetails: INttcomptebalancedetail[] = [];
  totalSoldeDebit: number;
  totalSoldeCredit: number;

  constructor(
    id: string,
    _oreference_id: string,
    _otableauposte_id: string,
    _oexerccompta_id: string,
    nttcomptebalancedetails: INttcomptebalancedetail[]) {
    this.id = id;
    this._oexerccompta_id = _oexerccompta_id;
    this._otableauposte_id = _otableauposte_id;
    this._oreference_id = _oreference_id;
    this.nttcomptebalancedetails = nttcomptebalancedetails;

    // tslint:disable-next-line:prefer-const
    let DetailsInCompteBalance: INttcomptebalancedetail[] = [];
    let DetailCount = 0;
    let TotalSoldeDebit = 0;
    let TotalSoldeCredit = 0;


    this.addComptebalanceDetail = function (objdata) {
      DetailsInCompteBalance.push(objdata);

      TotalSoldeDebit += objdata.SoldeDebit;
      TotalSoldeCredit += objdata.SoldeCredit;
      DetailCount = DetailsInCompteBalance.length;

      return {
        TotalSoldeDebit: TotalSoldeDebit,
        TotalSoldeCredit: TotalSoldeCredit,
        DetailCount: DetailCount,
      };
    };


    this.hasitem = function (nttcomptebalancedetail) {
      return this.nttcomptebalancedetails.indexOf(nttcomptebalancedetail) !== -1;

    };

    this.removeItem = function (nttcomptebalancedetail) {
      const itemIndex = this.nttcomptebalancedetails.indexOf(nttcomptebalancedetail);
      if (itemIndex !== -1) {
        this.nttcomptebalancedetails.splice(itemIndex, 1);
      }
    };

    this.getData = function () {
      return {
       // 'Id': this.id,
        '_oexerccompta_id': this._oexerccompta_id,
        '_otableauposte_id': this._otableauposte_id,
        '_oreference_id': this._oreference_id,
        'totalSoldeDebit': TotalSoldeDebit,
        'totalSoldeCredit': TotalSoldeCredit,
        'DetailCount': this.DetailCount,
        'nttcomptebalancedetails': DetailsInCompteBalance.slice()
      };
    };
  }

  getDetailComptebalance(): INttcomptebalancedetail[] {

    // tslint:disable-next-line:prefer-const
    let  detailsInCompteBalance: INttcomptebalancedetail[] = [];

    // tslint:disable-next-line:prefer-const
    for (let detailInCompteBalance of this.nttcomptebalancedetails) {

      // tslint:disable-next-line:prefer-const
      for (let item of this.nttcomptebalancedetails) {
        if (item.id === detailInCompteBalance.id) {
          detailsInCompteBalance.push(item);
          break;
        }
      }

    }
    return detailsInCompteBalance;

  }

  getOexerccomptaId(): string {
    return this._oexerccompta_id;
  }
  getOreferenceId(): string {
    return this._oreference_id;
  }
  getOtableauposteId(): string {
    return this._otableauposte_id;
  }

  getTotalSoldedebit(): number {
    let totalSoldedebit = 0;
    for (const item of this.nttcomptebalancedetails) {
      if (item.SoldeDebit !== undefined) {
        totalSoldedebit += item.SoldeDebit;
        break;
      }
    }

    return totalSoldedebit;
  }

  getTotalSoldecredit(): number {
    let totalSoldecredit = 0;

    for (const item of this.nttcomptebalancedetails) {
      if (item.SoldeCredit !== undefined) {
        totalSoldecredit += item.SoldeCredit;
        break;
      }
      return totalSoldecredit;
    }
  }

}
