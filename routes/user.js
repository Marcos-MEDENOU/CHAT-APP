const express = require('express')

const router=express.Router();


router.get('/', function(request,response){
    console.log("req.cookies=", request.cookies);
    response.end('Message depuis le user.js')
})

/* Page accueil */
router.get('/user', function(request,response){
   
    response.end('User')
})
/* Page accueil */
router.post('/user', function(request,response){
    response.end('User edit')
})


module.exports=router;