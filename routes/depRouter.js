const express=require('express');
const depRouter=express.Router();

const depController=require('../controllers/depController');
const authHelpers = require('../services/auth/auth-helpers');

depRouter.get('/',authHelpers.loginRequired,depController.index);
depRouter.get('/add',authHelpers.loginRequired,(req,res)=>{
    res.render('departments/add');
});
depRouter.post('/',authHelpers.loginRequired,depController.create);

depRouter.get('/:id/edit',authHelpers.loginRequired,depController.show,(req,res)=>{
    res.render('departments/edit',{
        dep:res.locals.dep
    })
})

depRouter.put('/:id',authHelpers.loginRequired,depController.update);

depRouter.get('/:id',authHelpers.loginRequired,depController.show,(req,res)=>{
    res.render('departments/show',{
        dep:res.locals.dep
    })
})

depRouter.delete('/:id',authHelpers.loginRequired,depController.delete);

module.exports=depRouter;