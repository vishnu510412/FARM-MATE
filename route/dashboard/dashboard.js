const express = require('express')
const app     = express.Router()
const uplaods = require('./../../functions/multer')


app.get('/dashboard', (req, res) => {
    res.render('dashboard/dashboard')
})

app.post('/dashboard',uplaods.single('image'),(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    res.send('done')
})



module.exports = app