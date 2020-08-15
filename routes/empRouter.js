const express=require('express');
const empRouter=express.Router();

const empController=require('../controllers/empController');
const authHelpers = require('../services/auth/auth-helpers');


empRouter.get('/',authHelpers.loginRequired,empController.index);

empRouter.get('/add',authHelpers.loginRequired,(req,res)=>{
    res.render('employees/add');
});

empRouter.get('/:id/edit',authHelpers.loginRequired,empController.show,(req,res)=>{
    res.render('employees/edit',{
        emp:res.locals.emp
    })
})
empRouter.get('/:id',authHelpers.loginRequired,empController.show,(req,res)=>{
    res.render('employees/show',{
        emp:res.locals.emp
    })
})



empRouter.post('/',authHelpers.loginRequired,empController.create);
empRouter.delete('/:id',authHelpers.loginRequired,empController.delete);
empRouter.put('/:id',authHelpers.loginRequired,empController.update);
module.exports=empRouter;