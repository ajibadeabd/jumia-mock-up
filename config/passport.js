const LocalStrategy=require('passport-local').Strategy
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
//load register model
const Register=mongoose.model('register')
//let Register=mongoose.model('register')
module.exports=function(passport){
    passport.use(new LocalStrategy({usernameField:'email'},(email,
        password,done)=>{
      //match user
        Register.findOne({
            email:email
        }).then(user=> {
            if(!user){
                return done(null,false,{message:'no user found'});

            }
            //match password
            bcrypt.compare(password,user.password,(err,same)=>{
                if(err) 
                throw err;
                if(same){
                    return done(null,user)
                }else{
                    return done(null,false,{message:'incorrect password'});
                }
            })
        })
    }))
    passport.serializeUser((user,done) => {
        done(null,user.id);
    });
    passport.deserializeUser((id,done) => {
        Register.findById(id,(err,user) => {
            done(err,user);
        })
    });

}