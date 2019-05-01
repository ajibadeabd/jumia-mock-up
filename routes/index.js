let express=require('express')
let router =express.Router()
let mongoose=require('mongoose')
let bcrypt = require('bcryptjs')
let passport=require('passport');
const {ensureAuthenticated}=require('../helpers/auth')
require('../model/register')
require('../model/paystack')
let Register=mongoose.model('register')
let Cart=mongoose.model('Cart')



router.get('/logout',(req,res,next)=>{
    req.logout();
    req.flash('success_msg',"you've been logged out")
    res.redirect('/')
})


//post login page
router.post('/login',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect:'/cart',
        failureRedirect:'/login',
        failureFlash:true
    })(req,res,next);
     
 });
 
router.get('/',(req,res,next)=>{
    res.render('jumia')
})

 router.get('/order',(req,res,next)=>{
    res.render('order')
})
//get login page
router.get('/login',(req,res,next)=>{
    res.render('login')
})


//get all of your order
router.get('/cart',(req,res,next)=>{
    res.render('cart')
})
//get register page
router.get('/register',(req,res,next)=>{
    res.render('register')
})
//post register page
router.post('/register',(req,res,next)=>{
    
    let errors=[]
    if(req.body.password !== req.body.conPassword){
      errors.push({text:'please enter a correct password'})
      
        console.log('please enter a correct password')

      }
      if(req.body.password.length< 8){
        errors.push({text:'please enter  character not less than 8'})
        console.log('please enter  character not less than 8')
        }
        if(errors.length>0){
         res.render('register',{
        errors: errors,
        userName:req.body.userName,
        email: req.body.email,
        phone:req.body.number,
        password:req.body.password,
        password2:req.body.conPassword
       
    
         })
        }

   
    
    else{
     Register.findOne({email:req.body.email})
     .then( user=>{
             if(user){
                req.flash('error_msg', 'Email already regsitered');

                 res.redirect('/register')
             }else{
                const User ={
                    userName:req.body.userName,
                    email: req.body.email,
                    phone:req.body.number,
                    password:req.body.password
                    
                }
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(User.password,salt,(err,hash)=>{
                        if(err)
                        throw err;
                        User.password=hash;
                        newUser=new Register(User)
                        newUser.save()
                        .then(user=>{
                            req.flash('success_msg','you have been registered successfully. you can now log in')
                            res.redirect('/login')
                   
                              }).catch((err)=>{
                                  console.log(err)
                                  return;
                              })
                    })
     })
             }
         }
     )
           
           }
})


module.exports=router