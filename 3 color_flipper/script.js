const btn=document.querySelector('button');
btn.addEventListener('click',()=>{
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let rgb="rgb("+red+','+green+','+blue+")";
    document.querySelector('body').style.backgroundColor=rgb;
    document.querySelector("#rgb").innerHTML=rgb;
})