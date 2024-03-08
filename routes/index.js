const express = require('express')
const router=express.Router();

// const app=express();

router.get('/', function(request,response){
    if(!request.user){
        return response.redirect('login')
    }
    return response.render('index')
})

module.exports=router;