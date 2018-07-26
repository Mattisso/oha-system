//  async = require('async')
// var nstBalanceInput = require('../../../omodels').nstBalanceInput;
var Models = require('../../../omodels')

var user= (function () {


  var DetailCount = 0,

  _arrusers =[];

function toUser (model,body) {

  return new Models.User(
    {
      username: body.username,
      role: body.role,
      password: body.password,

    });
}


function UpdateUser (model,body, data) {

if (data) {
  {
    data.username = body.username,
    data.role= body.role,
    data.password= body.password


  }
}
return data;
}



function BuildUser(model, body) {

  var userdata = toUser(model, body);

    _arrusers.push(userdata)


DetailCount = _arrusers.length

return {

  DetailCount: DetailCount,
  _arrusers:_arrusers.slice()

}

  }


  function toInitializeInstance(body) {
    var userdata = BuildUser(body)
    return {

      'DetailCount': userdata.DetailCount,
      '_arrusers':   userdata._arrusers.slice()
    };

  //  return  userdata
  }



function hasitem (obj) {
return this._arrusers.indexOf(obj) !== -1;

}

function removeItem (obj) {
var itemIndex = _arrusers.indexOf(obj);
if (itemIndex !== -1) {
  _arrusers.splice(itemIndex, 1);
}
}


function  addnewUser() {
_arrusers.push({
  "username": "",
  "role": "",
  "password": "",
  "SoldeCredit": ""
});
// this._arrusers.slice();
}




function getTotalCount () {

    if (_arrusers.length !== undefined && _arrusers.length>0) {

      return _arrusers.length;

    }

  }



function getData () {

return {
   'DetailCount': getTotalCount(),
  '_arrusers':   _arrusers.slice()
};
}

function init(){
  return {
    toInitializeInstance: toInitializeInstance,
    toUser:toUser,
    BuildUser:BuildUser,
    getData:getData,
    hasitem:hasitem,
    removeItem:removeItem,
    addnewUser:addnewUser,
    UpdateUser:UpdateUser
  }

}


return {
  init: init
}


})();
module.exports= {
  init: user.init
}
