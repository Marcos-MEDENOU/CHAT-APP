const express = require('express')

require('dotenv').config
const app=express();
const path = require('path')

const logger = require('morgan');
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth.js')
//****************Parametre de la vue ******/
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
//****************Parametre de la vue *******/



//****************middleware*******/
app.use(logger('dev'))
app.use(express.json()) // middleware utilisé pour analyser les requetes ayant une charge utile (payload)
// pour les rendre disponiblesur l'objet req.body 
//****************middleware**********/
app.use(express.urlencoded({extend:false}))
// middleware utilisé pour analyser les requetes entrante ayant une charge de requete (ex:'?fname=marcos')
//****************routes*******/

app.use(cookieParser())

app.use('/', indexRouter) // charge toutes les routes du fichier index
app.use('/user', userRouter)
app.use('/', authRouter)
//****************routes**********/


module.exports = app;