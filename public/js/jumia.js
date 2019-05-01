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



  

//get all myour cart
let book=buk=(num)=>{
    if(  localStorage.getItem('amounts')===null){
      let amounts=[]
      
      let cartAmount=document.getElementsByClassName('prize')[num].innerHTML;
      let cartImg=document.getElementsByTagName('img')[num].src
      let all={
          amount:cartAmount,
          img:cartImg
      }
     amounts.push(all)
      localStorage.setItem('amounts',JSON.stringify(amounts))
      
      console.log(document.getElementsByTagName('img')[num].src)
      console.log(document.getElementsByClassName('prize')[num].innerHTML)
       }else{
        let amounts = JSON.parse(localStorage.getItem('amounts'))
        let cartAmount=document.getElementsByClassName('prize')[num].innerHTML;
        let cartImg=document.getElementsByTagName('img')[num].src
        let all={
            amount:cartAmount,
            img:cartImg}
      amounts.push(all)
      localStorage.setItem('amounts',JSON.stringify(amounts))
      console.log(document.getElementsByTagName('img')[num].src)
      console.log(document.getElementsByClassName('prize')[num].innerHTML)
      
       }
       
        
}

let =imageChanger=()=>{
    let arrayOfImages=['2.jpg','mw5.jpg','4.jpg','lp.jpg','hijab.jpg',
    'foot.jpg','mw1.jpg','mw2.jpg','mw3.jpg','tv.jpg']
  changing=  document.getElementById('changing')
  let index=0
  function autoSlide(){
    changing.setAttribute('src',arrayOfImages[index])
    if(index<9){
        index++
    }else{
        index=0
    }
  }
  
setInterval(autoSlide,1600)

  
}
imageChanger()



//get lenght of local storage
let total=()=>{
    let amounts = JSON.parse(localStorage.getItem('amounts'))
    for(i=0;i<amounts.length;i++){
       let number= document.getElementById('number')
       number.innerHTML=i
    //    let arrayOfImages=['2.jpg','3.jpg']
    //    changing=  document.getElementById('changing')
    //    changing.setAttribute('src',arrayOfImages[1])
    //    setInterval(imageChanger,1000)
    }}

setInterval(total,100)

//fetch cart from local stotage

let fetchCart=()=>{
    amounts=JSON.parse(localStorage.getItem('amounts'))
     
            let TotalCart =document.getElementById('totalCart')
            for(i=0;i<amounts.length;i++){
        let amount=  amounts[i].amount;
        let imgs=amounts[i].img;
    TotalCart.innerHTML +='<div class="fCartlists col-3">'+
                     '<img src="'+imgs+'"/>'+

                     '<p class="prize">'+amount+'</p>'+
                     '</div>'  
                     console.log(imgs)
                     let totalLength=document.getElementById("totalLength");
                     totalLength.innerHTML=i
                     

                     console.log(i)
                    
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

