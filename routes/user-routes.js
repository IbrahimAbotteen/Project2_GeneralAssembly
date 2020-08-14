const express=require('express');
const userRouter=express.Router();

const authHelpers=require('../services/auth/auth-helpers');

const usersController=require('../controllers/users-controller')

userRouter.get('/new',authHelpers.loginRedirect,(req,res)=>{
    res.render('auth/register');
})

userRouter.post('/', usersController.create);
userRouter.get('/', authHelpers.loginRequired, usersController.index);

module.exports=userRouter;