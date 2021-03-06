const express = require('express');
const app = express();
const port = 8000;

const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

app.use(express.static('./assets'));



//Use Express Router
app.use('/', require('./routes'));

//Set up the view Engine
app.set('view engine', 'ejs');

app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`Error in running Server: ${err}`);

    }
    console.log(`Server is running on Port: ${port}`);

})