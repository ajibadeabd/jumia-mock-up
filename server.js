const express =require('express')
const app= express()
const bodyParser=require('body-parser')
const exphbs = require('express-handlebars')
const path =require('path')
const request=require('request')
const mongoose=require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const passport =require('passport')



//load route

const indexRouter=require('./routes/index')


//passport config
require('./config/passport')(passport)

//map global promise - get rid of warning
mongoose.promise=global.promise;


mongoose.connect('mongodb://localhost/jumia',
{useNewUrlParser:true})
.then(()=> console.log('mongodb connected'))
.catch((err) => console.log(err));


//handlebars middleware
app.engine("handlebars",exphbs({
    defaultLayout:"main"
}));
app.set('view engine','handlebars')


//body parser middle ware
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json());

//static file
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'public/img')));
app.use(express.static(path.join(__dirname,'public/js')));
app.use(express.static(path.join(__dirname,'public/css')));




//express session
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true,
    //cookies:{secure:true}
}));

//passport  middle ware
app.use(passport.initialize());
app.use(passport.session());

//flash
app.use(flash());

//global variable
app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

 
//use the index router
app.use('/',indexRouter)






let port =5000;

app.listen(5000,(req,res,next)=>{
    console.log(`server running at port ${port}`)
})