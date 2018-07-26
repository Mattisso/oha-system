// { nstBalance } from '../../../server/omodels/nstBalance';

export interface INstbalance {
  id: string;
  _oexerccompta_id: string;
  _otableauposte_id: string;
  _oreference_id: string;
  _ocompte_id: string;
  NumCompte: string;
  IntitulCompte: string;
  SoldeDebit?: number;
  SoldeCredit?: number;
  addnstbalance: () => void;
  hasitem: (objdata: any) => boolean;
  removeItem: (objdata: any) => void;
  getData: () => void;
  CreatedOn?: string;
  CreatedBy?: string;
  ModifiedOn?: string;
  ModifiedBy?: string;
}

export class Nstbalance {
   addnstbalance: () => void;
  hasitem: (objdata: any) => boolean;
  removeItem: (objdata: any) => void;
  getData: () => void;
  private _arrnstBalances: INstbalance[] = [];


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
    numcompte: string,
    intitulCompte: string,
    soldeDebit?: number, soldeCredit?: number,
   ) {
    this.id = id;
    this._oexerccompta_id = _oexerccompta_id;
    this._otableauposte_id = _otableauposte_id;
    this._oreference_id = _oreference_id;
    this._ocompte_id = _ocompte_id;
    this.NumCompte = numcompte;
    this.SoldeDebit = soldeDebit;
    this.SoldeCredit = soldeCredit;

    function isNum(value) {
      if (isNaN(value)) {
        value = 0;
      } else {
        return value;

      }

    }

 this.addnstbalance = function () {
  this._arrnstBalances.push({
    'id': this.id,
    '_oexerccompta_id': this._oexerccompta_id,
    '_otableauposte_id' : _otableauposte_id,
    '._oreference_id' : _oreference_id,
    '_ocompte_id' : _ocompte_id,
    'NumCompte': this.numcompte,
    'IntitulCompte': this.intitulCompte,
    'SoldeDebit': this.soldeDebit,
    'SoldeCredit': this.oldeCredit,
    'CreatedOn': this.CreatedOn,
    'CreatedBy': this.CreatedBy,
    'ModifiedOn': this.ModifiedOn,
    'ModifiedBy': this.ModifiedBy
  });


  // var i;
  /* for (let i = 0; i < _arrnstBalances.length; i++) {
     TotalSoldeDebit += isNum(_arrnstBalances[i].this.soldeDebit);

       }

       for ( let i = 0; i < _arrnstBalances.length; i++) {
     TotalSoldeCredit += isNum(_arrnstBalances[i].SoldeCredit);


       }*/

       let  DetailCount = 0;
       let TotalSoldeDebit = 0;
       let TotalSoldeCredit = 0;

   TotalSoldeDebit += isNum(this.soldeDebit);
  TotalSoldeCredit += isNum(this.soldeCredit);
  DetailCount = this._arrnstBalances.length;

  return {
    TotalSoldeDebit: TotalSoldeDebit,
    TotalSoldeCredit: TotalSoldeCredit,
    DetailCount: DetailCount,
  };

 };
this.hasitem = function (objdata) {
  return this._arrnstBalances.indexOf(objdata) !== -1;

};
this.removeItem = function (objdata) {
  const itemIndex = this._arrnstBalances.indexOf(objdata);
  if (itemIndex !== -1) {
    this._arrnstBalances.splice(itemIndex, 1);
  }
};

// var getData;
this.getData = function () {
  return {
    '_oexerccompta_id': this._oexerccompta_id,
    '_otableauposte_id' : _otableauposte_id,
    '._oreference_id' : _oreference_id,
    '_ocompte_id' : _ocompte_id,
    'NumCompte': this.numcompte,
    'IntitulCompte': this.intitulCompte,
    'SoldeDebit': this.soldeDebit,
    'SoldeCredit': this.oldeCredit,
    'TotalSoldeDebit': this.TotalSoldeDebit,
    'TotalSoldeCredit': this.TotalSoldeCredit,
    'CreatedOn': this.CreatedOn,
    'CreatedBy': this.CreatedBy,
    'ModifiedOn': this.ModifiedOn,
    'ModifiedBy': this.ModifiedBy,
    'DetailCount': this.DetailCount,
    '_arrnstBalances': this._arrnstBalances.slice()
  };
};
  }
}
