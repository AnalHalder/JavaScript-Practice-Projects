let text=document.querySelector('input');
let add=document.querySelector('.add');
let list=document.querySelector('.show-data');

add.addEventListener('click',()=>{
     if(text.value==""){
          window.alert("please add your task")
          return;
     }
     let li=document.createElement("li");
     li.innerHTML=text.value+"  ";

     let btn=document.createElement('button');
     btn.innerHTML='delete';
     btn.className='delete';

     li.appendChild(btn);
     list.appendChild(li);
     
     text.value = '';
     saveData();
})
list.addEventListener('click',(event)=>{
     if (event.target.classList.contains('delete')) {
          event.target.parentElement.remove(); // Remove the parent li of the clicked delete button
          saveData();
      }
})
function saveData(){
    localStorage.setItem('data1',list.innerHTML);
}
function showTask(){// it will show tasks untill it deleted
	list.innerHTML=localStorage.getItem("data1");
}
showTask();

