const express=require('express');
const mainRouter=express.Router();

const authHelpers = require('../services/auth/auth-helpers');

mainRouter.get('/',authHelpers.loginRequired,(req,res)=>{
    res.render('main')
})

module.exports=mainRouter;