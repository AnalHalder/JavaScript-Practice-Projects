const arr=["./images/img (1).jpeg","./images/img (2).jpeg","./images/img (3).jpeg","./images/img (4).jpeg","./images/img (5).jpeg","./images/img (6).jpeg","./images/img (7).jpeg"];
let idx=0;
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const img=document.querySelector('img');
next.addEventListener('click',()=>{
    idx++;
    if(idx==arr.length) idx=0;
    img.setAttribute('src',arr[idx]);
})
prev.addEventListener('click',()=>{
    idx--;
    if(idx<0) idx=arr.length-1;
    img.setAttribute('src',arr[idx]);
})

