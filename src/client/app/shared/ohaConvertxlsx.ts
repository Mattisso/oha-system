   /* tslint-disable  no-shadowed-variable*/


      /* tslint-disable  no-shadowed-variable*/


   let    ohaConvertxlsx = (function () {
       const XLSX = require('xlsx');
       const path = require('path');

     ohaConvertxlsx = function (getFile) {

           const workbook = XLSX.readFile(getFile);

           const first_sheet_name = workbook.SheetNames[0];
           const oworksheet = workbook.Sheets[first_sheet_name];

           const options = {
               raw: true,
               header: ['NumCompte', 'IntitulCompte', 'SoldeDebit', 'SoldeCredit']
           };
         //  var worksheettojson = JSON.stringify(XLSX.utils.sheet_to_json(oworksheet, options));
           const worksheettojson = XLSX.utils.sheet_to_json(oworksheet, options);

           return {
               worksheettojson: worksheettojson
           };

       };


       return {
           _getworkbook: ohaConvertxlsx
       };

     })();

     module.exports = {_getworkbook: ohaConvertxlsx._getworkbook};



  /* module.exports = {


   ohaConvertXLSX : (function (getFile) {
  const XLSX = require('xlsx');
  const path = require('path');


      const workbook = XLSX.readFile(getFile);

      const first_sheet_name = workbook.SheetNames[0];
      const oworksheet = workbook.Sheets[first_sheet_name];

      const options = {
          raw: true,
          header: ['NumCompte', 'IntitulCompte', 'SoldeDebit', 'SoldeCredit']
      };
    //  var worksheettojson = JSON.stringify(XLSX.utils.sheet_to_json(oworksheet, options));
      const worksheettojson = XLSX.utils.sheet_to_json(oworksheet, options);

      return {
          worksheettojson: worksheettojson
      };


})()
   };*/
