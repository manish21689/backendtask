var ccontroller = require('../controllers/user')
const userAuth= require('../middleware/userauth')
var express= require('express');
var router= express.Router();
router.post('/',ccontroller.Createdata);
router.get('/',userAuth.checkCredential,ccontroller.getAll);
router.get('/id/:id',ccontroller.getById);
router.put('/id/:id',ccontroller.updateById);
router.delete('/id/:id',ccontroller.deletetById);
router.get('/counts',ccontroller.rcounts);
router.get('/task/id/:id/:lid/:status',ccontroller.gettaskbylistid);
router.get('/play/:id',ccontroller.gettasks);
module.exports=router