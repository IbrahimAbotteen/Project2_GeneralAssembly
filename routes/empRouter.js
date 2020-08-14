const express=require('express');
const empRouter=express.Router();

const empController=require('../controllers/empController');


empRouter.get('/',empController.index);

empRouter.get('/add',(req,res)=>{
    res.render('employees/add');
});

empRouter.get('/:id/edit',empController.show,(req,res)=>{
    res.render('employees/edit',{
        emp:res.locals.emp
    })
})
empRouter.get('/:id',empController.show,(req,res)=>{
    res.render('employees/show',{
        emp:res.locals.emp
    })
})



empRouter.post('/',empController.create);
empRouter.delete('/:id',empController.delete);
empRouter.put('/:id',empController.update);
module.exports=empRouter;