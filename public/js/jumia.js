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




// getting days seconds minute hour
for(i=0;i<(document.getElementsByClassName('days').length);i++){
document.getElementsByClassName('days')[i].innerHTML=days   
document.getElementsByClassName('seconds')[i].innerHTML=seconds
document.getElementsByClassName('minutes')[i].innerHTML=minutes
document.getElementsByClassName('hours')[i].innerHTML=hours
}

 }
 timer()
 let dis=aa=()=>{
     setInterval(timer,1000)}
     aa()



//      //Getting items
// for(getCart=0; getCart<document.getElementsByClassName('cart').length;getCart++){
// document.getElementsByClassName('cart')[getCart].onclick = getCarts =()=>{
//     console.log('welldone');
//     for(me=0;me<document.getElementsByClassName('booked').length;me++){
// document.getElementsByClassName('booked')[me].innerText='booked'}
// }
// }

//function for all sixteen items
let book=buk=(okay)=>{
    for(me=0;me<document.getElementsByClassName('booked').length;me++){

    
 document.getElementsByClassName('booked')[okay].innerHTML='bookd'
 document.getElementsByClassName('booked')[okay].style.display='block'
 for(j=0;j<document.getElementsByClassName('booked').length;j++){
 document.getElementById('number').innerHTML=j

 let what =document.getElementById('what')
 //i just wanna add only the item ppl  click it adding all
 let fcart=document.getElementsByClassName('fCartlist')[okay]
 what.appendChild(fcart)

      } 
     }
}


document.getElementsByClassName('cart')[0].onclick=()=>{
    buk(0)
}
document.getElementsByClassName('cart')[1].onclick=()=>{
    buk(1)

}

document.getElementsByClassName('cart')[2].onclick=()=>{
    buk(2)
   
}
document.getElementsByClassName('cart')[3].onclick=()=>{
    buk(3)
    
}

document.getElementsByClassName('cart')[4].onclick=()=>{
    buk(4)
  
}
document.getElementsByClassName('cart')[5].onclick=()=>{
    buk(5)
    
}

document.getElementsByClassName('cart')[6].onclick=()=>{
    buk(6)
} 
document.getElementsByClassName('cart')[7].onclick=()=>{
    buk(7)
   
}

document.getElementsByClassName('cart')[8].onclick=()=>{
    buk(8)
    
}
document.getElementsByClassName('cart')[9].onclick=()=>{
    buk(9)

}

document.getElementsByClassName('cart')[10].onclick=()=>{
    buk(10)
   
}
document.getElementsByClassName('cart')[11].onclick=()=>{
    buk(11)
    
}

document.getElementsByClassName('cart')[12].onclick=()=>{
    buk(12)
   
}
document.getElementsByClassName('cart')[13].onclick=()=>{
    buk(13)
 
}

document.getElementsByClassName('cart')[14].onclick=()=>{
    buk(14)

}
document.getElementsByClassName('cart')[15].onclick=()=>{
    buk(15)
 
}

