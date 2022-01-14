const express=require('express');
const app=express();
const path=require('path');


//settings 
app.set('port',process.env.PORT||3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

//listening the server
app.listen(app.get('port'),()=>{
    console.log('listening on port',app.get('port'));
});
//middleware



//routers

app.use(require('./routes/index'))

//static files
app.use(express.static(path.join(__dirname, 'public')))