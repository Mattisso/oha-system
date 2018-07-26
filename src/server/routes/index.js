var  nstbalanceinputsRoutes= require('./nstbalanceinputs');
var  nsbalanceRouter= require('./nstbalances');
var  nttbalanceRouter= require('./nttbalances');
var  nttcomptebalanceRouter= require('./nttcomptebalances');
var userRouter =require('./users')

var  nttcomptebalancedetailRouter= require('./nttcomptebalancedetail');
var  routes = require('express').Router();

routes.get('/', (req, res) => {
 return  res.status(200).json({ message: 'Connected!' });
});

/*routes.use('/api', function(req, res, next) {
  return   nstbalanceinputsRoutes();
    //process each request nstbalanceinputsRoutes
    });*/

routes.use('/api',nstbalanceinputsRoutes);
routes.use('/api',nsbalanceRouter);
routes.use('/api',nttbalanceRouter);
routes.use('/api',nttcomptebalanceRouter);
routes.use('/api',nttcomptebalancedetailRouter);
routes.use('/api', userRouter);
//routes.use(nstbalanceinputsRoutes);

module.exports = routes;
