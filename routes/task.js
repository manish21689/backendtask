var ccontroller = require('../controllers/task')
var express= require('express');
var router= express.Router();
router.post('/',ccontroller.Createdata);
router.get('/',ccontroller.getAll);
router.get('/id/:id',ccontroller.getById);
router.put('/id/:id',ccontroller.updateById);
router.delete('/id/:id',ccontroller.deletetById);
router.get('/counts',ccontroller.rcounts);
module.exports=router