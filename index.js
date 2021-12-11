if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express  = require('express')
const layouts  = require('express-ejs-layouts')

const app      = express()

const login      = require('./route/ums/login')
const sign_in    = require('./route/ums/sign_up')
const dashboard  = require('./route/dashboard/dashboard')
const pwa        = require('./pwa/pwa')
const connect    = require('./functions/mongodb') 

const port       =  process.env.PORT || 3000

connect()

app.use(layouts)
app.use(express.urlencoded({limit:'10mb',extended:false }))
app.use(express.static('public'))

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layout')

app.use('/',login)
app.use('/',sign_in)
app.use('/',dashboard)
app.use('/',pwa)

app.listen(port,()=>console.log('app started'))