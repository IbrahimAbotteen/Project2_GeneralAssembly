const express=require('express');
const regRouter=express.Router();

const authHelpers = require('../services/auth/auth-helpers');

regRouter.get('/',authHelpers.loginRequired,(req,res)=>{
    res.render('auth/register')
})

module.exports=regRouter;