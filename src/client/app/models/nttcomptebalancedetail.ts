// import { nttCompteBalanceDetail } from '../../../server/omodels/nttcomptebalancedetail';


export interface INttcomptebalancedetail {
  id: string;
  _nttcomptebalance_id: string;
  NumCompte: string;
  IntitulCompte: string;
  SoldeDebit?: number;
  SoldeCredit?: number;
  CreatedOn?: string;
  CreatedBy?: string;
  ModifiedOn?: string;
  ModifiedBy?: string;
  addnttcomptedetails: () => void;
  hasitem: (objdata: any) => boolean;
  removeItem: (objdata: any) => void;
  getData: () => void;

}



export class Nttcomptebalancedetail implements INttcomptebalancedetail {
  addnttcomptedetails: () => void;
  hasitem: (objdata: any) => boolean;
  removeItem: (objdata: any) => void;
  getData: () => void;
  private _arrnttBalances: INttcomptebalancedetail[] = [];


  id: string;
  _nttcomptebalance_id: string;
  NumCompte: string;
  IntitulCompte: string;
  SoldeDebit?: number;
  SoldeCredit?: number;

  constructor(id: string,
    _nttcomptebalance_id: string,
    NumCompte: string,
    IntitulCompte: string,
    SoldeDebit?: number, SoldeCredit?: number,
  ) {
    this.id = id;
    this._nttcomptebalance_id = _nttcomptebalance_id;
    this.NumCompte = NumCompte;
    this.IntitulCompte = IntitulCompte;
    this.SoldeDebit = SoldeDebit;
    this.SoldeCredit = SoldeCredit;


    function isNum(value) {
      if (isNaN(value)) {
        value = 0;
      } else {
        return value;

      }

    }

    this.addnttcomptedetails = function () {
      this._arrnttBalances.push({
        'id': this.id,
        '_nttcomptebalance_id': this._nttcomptebalance_id,
        'NumCompte': this.NumCompte,
        'IntitulCompte': this.IntitulCompte,
        'SoldeDebit': this.SoldeDebit,
        'SoldeCredit': this.SoldeCredit,
        'CreatedOn': this.CreatedOn,
        'CreatedBy': this.CreatedBy,
        'ModifiedOn': this.ModifiedOn,
        'ModifiedBy': this.ModifiedBy
      });


      let DetailCount = 0;
      let TotalSoldeDebit = 0;
      let TotalSoldeCredit = 0;

      TotalSoldeDebit += isNum(this.SoldeDebit);
      TotalSoldeCredit += isNum(this.SoldeCredit);
      DetailCount = this._arrnttBalances.length;

      return {
        TotalSoldeDebit: TotalSoldeDebit,
        TotalSoldeCredit: TotalSoldeCredit,
        DetailCount: DetailCount,
      };

    };
    this.hasitem = function (objdata) {
      return this._arrnttBalances.indexOf(objdata) !== -1;

    };
    this.removeItem = function (objdata) {
      const itemIndex = this._arrnttBalances.indexOf(objdata);
      if (itemIndex !== -1) {
        this._arrnttBalances.splice(itemIndex, 1);
      }
    };

    // var getData;
    this.getData = function () {
      return {
        '_nttcomptebalance_id': this._nttcomptebalance_id,
        'NumCompte': this.NumCompte,
        'IntitulCompte': this.IntitulCompte,
        'SoldeDebit': this.SoldeDebit,
        'SoldeCredit': this.oldeCredit,
        'CreatedOn': this.CreatedOn,
        'CreatedBy': this.CreatedBy,
        'ModifiedOn': this.ModifiedOn,
        'ModifiedBy': this.ModifiedBy,
        'DetailCount': this.DetailCount,
        '_arrnttBalances': this._arrnttBalances.slice()
      };
    };
  }

}


