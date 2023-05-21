const path = require('path');// import thu viện path
const express = require('express');// import thư vienj express của nodejs
const morgan = require('morgan');//import để logger ra request
const handlebars = require('express-handlebars');//kieu nhu body thay doi,header and footer remain

const app = express();
const port = 3000;
// http logger
app.use(morgan('combined'));


//template engige
app.engine('hbs',handlebars.engine(// no noi rang project nay su dung handlerbars
    {
        extname: 'hbs'// config lai ten cua handlebars cho ngan lai 
    }
));
app.set('view engine','hbs');// set handlebars cho project
app.set('views', path.join(__dirname, 'resource\\views'));// 

app.get('/',(rep,res) => {

    res.render('home');
})
app.get('/new',(rep,res) => {

    res.render('new');
})
app.listen(port, ()=>console.log(`example app listening at http://localhost:${port}`))