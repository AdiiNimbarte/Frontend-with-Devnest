const theatre=document.querySelector("#hall");
const b=document.querySelector('#book');
const r=document.querySelector('#r');
r.innerHTML=36;
b.innerHTML=0;
let bok=0,rem=36;
console.log(r.innerHTML);
for( let i=0;i<6;i++)
{
    for( let j=0;j<6;j++)
    {
        theatre.innerHTML+="<div class='seat'></div>";
    }
}
const vacant=document.querySelectorAll(".seat");
var arr = new Array(36).fill(0);
console.log(arr[1]);
for(let k=0;k<36;k++)
{
  vacant[k].addEventListener("click",()=>
  {
    if(arr[k]==0){
    vacant[k].classList.toggle('booked') 
      bok=parseInt(b.innerHTML);
      b.innerHTML=(bok+1);
      bok=parseInt(b.innerHTML);
      r.innerHTML=36-parseInt(b.innerHTML);
      rem=parseInt(r.innerHTML);
      arr[k]=1;}
    else{
      vacant[k].classList.toggle('booked')
      bok=parseInt(b.innerHTML);
      b.innerHTML=(bok-1);
      rem=parseInt(r.innerHTML);
      r.innerHTML=rem+1;
      arr[k]=0;
    }
    
  });
}

