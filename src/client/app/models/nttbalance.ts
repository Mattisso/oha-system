// import { nttBalance } from '../../../server/omodels/index';

export interface INttbalance  {
  id: string;
  _oexerccompta_id: string;
  _otableauposte_id: string;
  _oreference_id: string;
  _ocompte_id: string;
  NumCompte: string;
  IntitulCompte: string;
  SoldeDebit?: number;
  SoldeCredit?: number;
  addnttbalance: () => void;
  hasitem: (objdata: any) => boolean;
  removeItem: (objdata: any) => void;
  getData: () => void;
  CreatedOn?: string;
  CreatedBy?: string;
  ModifiedOn?: string;
  ModifiedBy?: string;
}

export class Nttbalance  implements INttbalance {
  addnttbalance: () => void;
  hasitem: (objdata: any) => boolean;
  removeItem: (objdata: any) => void;
  getData: () => void;
  private _arrnttBalances: INttbalance[] = [];


  id: string;
  _oexerccompta_id: string;
  _otableauposte_id: string;
  _oreference_id: string;
  _ocompte_id: string;
  NumCompte: string;
  IntitulCompte: string;
  SoldeDebit?: number; SoldeCredit?: number;

  constructor(id: string,
    _oexerccompta_id: string,
    _otableauposte_id: string,
    _oreference_id: string,
    _ocompte_id: string,
    NumCompte: string,
    IntitulCompte: string,
    SoldeDebit?: number, SoldeCredit?: number,
  ) {
    this.id = id;
    this._oexerccompta_id = _oexerccompta_id;
    this._otableauposte_id = _otableauposte_id;
    this._oreference_id = _oreference_id;
    this._ocompte_id = _ocompte_id;
    this.NumCompte = NumCompte;
    this.SoldeDebit = SoldeDebit;
    this.SoldeCredit = SoldeCredit;

    function isNum(value) {
      if (isNaN(value)) {
        value = 0;
      } else {
        return value;

      }

    }

    this.addnttbalance = function () {
      this._arrnttBalances.push({
        'id': this.id,
        '_oexerccompta_id': this._oexerccompta_id,
        '_otableauposte_id': _otableauposte_id,
        '._oreference_id': _oreference_id,
        '_ocompte_id': _ocompte_id,
        'NumCompte': this.NumCompte,
        'IntitulCompte': this.IntitulCompte,
        'SoldeDebit': this.SoldeDebit,
        'SoldeCredit': this.SoldeCredit,
        'CreatedOn': this.CreatedOn,
        'CreatedBy': this.CreatedBy,
        'ModifiedOn': this.ModifiedOn,
        'ModifiedBy': this.ModifiedBy
      });


      // var i;
      /* for (let i = 0; i < _arrnttBalances.length; i++) {
         TotalSoldeDebit += isNum(_arrnttBalances[i].this.soldeDebit);

           }

           for ( let i = 0; i < _arrnttBalances.length; i++) {
         TotalSoldeCredit += isNum(_arrnttBalances[i].SoldeCredit);


           }*/

      let DetailCount = 0;
      let TotalSoldeDebit = 0;
      let TotalSoldeCredit = 0;

      TotalSoldeDebit += isNum(this.SoldeDebit);
      TotalSoldeCredit += isNum(this.NSoldeCredit);
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
        '_oexerccompta_id': this._oexerccompta_id,
        '_otableauposte_id': _otableauposte_id,
        '._oreference_id': _oreference_id,
        '_ocompte_id': _ocompte_id,
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
