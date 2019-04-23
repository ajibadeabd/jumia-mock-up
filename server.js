let express =require('express')
const app= express()
const bodyParser=require('body-parser')
const exphbs = require('express-handlebars')
const path =require('path')
const request=require('request')
const mongoose=require('mongoose')


//handlebars middleware
app.engine("handlebars",exphbs({
    defaultLayout:"main"
}));
app.set('view engine','handlebars')

//body parser middle ware
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())
//app.use('/',indexRouter)



mongoose.connect(`mongodb://localhost:27017/jumia`,{useNewUrlParser:true});
//module.exports = {mongoose}
app.use(express.static(path.join(__dirname,'public')));




app.get('/',(req,res,next)=>{
    res.render('jumia')
})



app.get('/cart',(req,res,next)=>{
    res.render('cart')
})
app.get('/register',(req,res,next)=>{
    res.render('register')
})

app.post('/register',(req,res,next)=>{
    res.send('register inprogress')
})



let port =5000;

app.listen(5000,(req,res,next)=>{
    console.log(`server running at port ${port}`)
})