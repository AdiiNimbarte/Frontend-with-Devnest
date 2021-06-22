const block=document.querySelector("#obj");

for( let i=0;i<20;i++)
{
  for( let j=0;j<20;j++)
  block.innerHTML+="<div class='a'></div>";
}

const clk=document.querySelectorAll(".a");
for(let k=0;k<400;k++)
{
  //console.log(clk[k].classList);
  clk[k].addEventListener("click",()=>{clk[k].classList.toggle('b')});
}