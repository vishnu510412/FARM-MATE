const express  = require('express');
const layouts  = require('express-ejs-layouts');

const app      = express();

const port     = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(layouts);
app.use(express.urlencoded({extended:false,limit:'10mb'}));

app.set('views', `${__dirname}/views`);
app.set('layout', 'layouts/layout');
app.set('view engine', 'ejs');

app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
})


