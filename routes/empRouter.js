const express=require('express');
const empRouter=express.Router();

const empController=require('../controllers/empController');

empRouter.get('/',empController.index);
empRouter.show('/',empController.show);

module.exports=empRouter;