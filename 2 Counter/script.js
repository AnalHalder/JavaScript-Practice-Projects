const inc=document.querySelector('.inc');
const dec=document.querySelector('.dec');
const res=document.querySelector('.res');
const value=document.querySelector('.value');
let count=0;
inc.addEventListener('click',()=>{
    count++;
    value.innerHTML=count;
    if(count>0) value.style.color='green';
    else if(count==0)  value.style.color='black';
    
})
dec.addEventListener('click',()=>{
    count--;
    value.innerHTML=count;
    if(count<0) value.style.color='red';
    else if(count==0)  value.style.color='black';
})
res.addEventListener('click',()=>{
   count=0;
   value.innerHTML=count;
   value.style.color='black';
})