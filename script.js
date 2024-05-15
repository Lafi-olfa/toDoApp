const input = document.getElementById('input');
const row = document.getElementsByClassName('row');
const button = document.querySelector('button');
const tasks= document.getElementById('list-tasks');
 addTask=(e)=>{
    if(input.value ===""){
        alert('you must add a task!')
    } else{
        let item= document.createElement("li");
        item.innerHTML = input.value;
        item.classList.add('checked')
        tasks.appendChild(item)
        let span = document.createElement('span');
        span.classList.add('close-icon')
        span.innerHTML= '\u00d7';
        item.appendChild(span);
        saveData()
    }
    input.value= ''
}
tasks.addEventListener('click',(event)=>{
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked')
        saveData()
    }
   else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem('task', tasks.innerHTML)
}
function showTasks(){
    tasks.innerHTML= localStorage.getItem('task')
}
showTasks()