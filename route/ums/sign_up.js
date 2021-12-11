
const fast2sms =  require('fast-two-sms')
const app      =  require('express').Router()

const states   = require('../../const/ejs/state')

app.get('/signup',(req,res)=>
{
    res.render('ums/sign_up',{states:states})
})

app.post('/signup',(req,res)=>{
    let data=req.body
    res.send(data)
})

module.exports = app
