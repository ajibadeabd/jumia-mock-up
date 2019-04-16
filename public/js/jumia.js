
 let timer =()=>{
let countDown=new Date('may 5,2019 15:37:25');
// get todays and time
let d=new Date();
let now =d.getTime();
//distance btw them
let distance =countDown-now;
//time calculation
let days= Math.floor(distance/(1000*60*24));
let hours= Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes= Math.floor((distance%(1000*60*60))/(1000*60));
let seconds= Math.floor((distance%(1000*60))/(1000));
let result=days +"d "+hours+"h "+minutes+"m "+seconds+"s "




//days
for(i=0;i<(document.getElementsByClassName('days').length);i++){
document.getElementsByClassName('days')[i].innerHTML=days   

}
//seconds
for(i=0;i<(document.getElementsByClassName('seconds').length);i++){
document.getElementsByClassName('seconds')[i].innerHTML=seconds
   
}
//minutes
for(i=0;i<(document.getElementsByClassName('minutes').length);i++){
    document.getElementsByClassName('minutes')[i].innerHTML=minutes
  
}
//hours
for(i=0;i<(document.getElementsByClassName('hours').length);i++){
 document.getElementsByClassName('hours')[i].innerHTML=hours

}
 }
 timer()
 let dis=aa=()=>{
     setInterval(timer,1000)}
     aa()
//Getting items
for(getCart=0; getCart<document.getElementsByClassName('cart').length;getCart++){
document.getElementsByClassName('cart')[getCart].onclick=getCarts=()=>{
    console.log('welldone');

}

getCarts()
}