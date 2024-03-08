const express = require('express')
const router=express.Router();

// const app=express();

router.get('/', function(request,response){
    response.render('index')
})

module.exports=router;