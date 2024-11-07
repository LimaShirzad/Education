const text=document.querySelector(".text");
const textlod=function()
{
    setTimeout(()=>{
     text.textContent="Welcom To Our Collage";
    }, 0);


    setTimeout(()=>{
        text.textContent="We Provide Best Service";
       }, 4000);

}
textlod();
setInterval(textlod,12000);

let btn1=document.getElementById("btn1");
let card1=document.getElementById("card1");
let card1_close=document.getElementById("btn1close");
let allbody=document.getElementById("more-information");
btn1.addEventListener("click",function()
{
    allbody.style.display="flex";
    card1.style.display="flex";
     
   
})
card1_close.addEventListener("click",function()
{
    allbody.style.display="none";
    card1.style.display="none";
})



let btn2=document.getElementById("btn2");
let card2=document.getElementById("card2");
let card2_close=document.getElementById("btn2close");

btn2.addEventListener("click",function()
{
    allbody.style.display="flex";
    card2.style.display="flex";
     
   
})
card2_close.addEventListener("click",function()
{
    allbody.style.display="none";
    card2.style.display="none";
})


let btn3=document.getElementById("btn3");
let card3=document.getElementById("card3");
let card3_close=document.getElementById("btn3close");

btn3.addEventListener("click",function()
{
    allbody.style.display="flex";
    card3.style.display="flex";
     
   
})
card3_close.addEventListener("click",function()
{
    allbody.style.display="none";
    card3.style.display="none";
})



let btn4=document.getElementById("btn4");
let card4=document.getElementById("card4");
let card4_close=document.getElementById("btn4close");

btn4.addEventListener("click",function()
{
    allbody.style.display="flex";
    card4.style.display="flex";
     
   
})
card4_close.addEventListener("click",function()
{
    allbody.style.display="none";
    card4.style.display="none";
})



