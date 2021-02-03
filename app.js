const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

const responseText = 'Hello I am listening';
const PORT  = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.use(bodyParser.urlencoded({ extended  : true }));
app.use(express.static('styles'));


app.get('/',(req,res) => {
    res
    .status(200)
    .render('index',{
        title : 'Home'
    })
})


app.listen(PORT,(req,res) => {
    console.log(responseText);
});