const express=require('express');
const empRouter=express.Router();

const empController=require('../controllers/empController');


empRouter.get('/',empController.index);

empRouter.get('/add',(req,res)=>{
    res.render('employees/add');
});

empRouter.get('/:id',empController.show);
empRouter.post('/',empController.create);
empRouter.delete('/:id',empController.delete)
module.exports=empRouter;