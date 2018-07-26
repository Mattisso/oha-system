// fitnessApp.nttCompteBalance
let ohaCompteBalance = (function () {

      'use strict';

      const nttCompteBalance = function (id, oExercComptaId, oTableauPosteId, oReferenceId) {

          const nttCompteBalanceDetails = [];
          let nttCompteBalanceDetail = {};
          let DetailCount = 0;
          let TotalSoldeDebit = 0;
          let TotalSoldeCredit = 0;
          nttCompteBalanceDetail = {

              Id: 0,
              NumCompte: '',
              IntitulCompte: '',
              SoldeDebit: '',
              SoldeCredit: ''
          };


          this.addBalanceDetail = function (BalanceDetailid, nttCompteBalanceId, NumCompte, IntitulCompte, SoldeDebit, SoldeCredit) {
              nttCompteBalanceDetails.push({
                  'Id': id,
                  'nttCompteBalanceId': nttCompteBalanceId,
                  'NumCompte': NumCompte,
                  'IntitulCompte': IntitulCompte,
                  'SoldeDebit': SoldeDebit,
                  'SoldeCredit': SoldeCredit
                             });

              TotalSoldeDebit += SoldeDebit;
              TotalSoldeCredit += SoldeCredit;
              DetailCount = nttCompteBalanceDetails.length;

              return {
                  TotalSoldeDebit: TotalSoldeDebit,
                  TotalSoldeCredit: TotalSoldeCredit,
                  DetailCount: DetailCount,
              };
          };


       /*   this.flagcomptebalanceAsEdited = function () {
              if (this.ObjectState() !== ObjectState.Added) {
                  this.ObjectState(ObjectState.Modified);
              }
              return true;
          };
  */
       /*   this.addcomptebalancedetail = function () {
              var nttcomptebalancedetail = new nttCompteBalanceDetail({
                  Id: 0,
                  NumCompte: "",
                  IntitulCompte: "",
                  SoldeDebit: "",
                  SoldeCredit: ""
                 // ObjectState: ObjectState.Added

              });
              this.nttCompteBalanceDetails.slice().push(nttcomptebalancedetail);

          };
  */
          this.hasitem = function (nttcomptebalancedetail) {
              return nttCompteBalanceDetails.indexOf(nttcomptebalancedetail) !== -1;

          };

          this.removeItem = function (nttcomptebalancedetail) {
              const itemIndex = nttCompteBalanceDetails.indexOf(nttcomptebalancedetail);
              if (itemIndex !== -1) {
                  nttCompteBalanceDetails.splice(itemIndex, 1);
              }
          };

          this.getData = function () {
              return {
                  'Id': id,
                  'oExercComptaId': oExercComptaId,
                  'oTableauPosteId': oTableauPosteId,
                  'oReferenceId': oReferenceId,
                  'TotalSoldeDebit': TotalSoldeDebit,
                  'TotalSoldeCredit': TotalSoldeCredit,
                  'DetailCount': DetailCount,
                  'nttCompteBalanceDetails': nttCompteBalanceDetails.slice()
              };
          };
      };

      return{
          nttCompteBalance : nttCompteBalance

      };
  })();



  // Test the constructor at the console prompt:
  let nttcomptebalance = new ohaCompteBalance.nttCompteBalance(2, 87, 2007, 1);
  nttcomptebalance.addBalanceDetail(0, 2, '58520', 'Mensah', 90000, 0);
  nttcomptebalance.addBalanceDetail(0, 2, '456200', 'Mensah1', 1500000, 0);
  console.log(nttcomptebalance.getData());
  console.log(nttcomptebalance.getData().TotalSoldeDebit);
  console.log(nttcomptebalance.getData().TotalSoldeCredit);
