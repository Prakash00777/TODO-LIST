const input=document.getElementById('input')
const submitBtn=document.getElementById('submit')
const todos=document.querySelector('.todos')

submitBtn.addEventListener('click',()=>{
     updateTodos()
})


function updateTodos()
{
    todos.innerHTML+=
    `
    <div class="txt">
      <p>${input.value}</p>
      <button onclick="removeTodo(this)">Remove</Button>
     </div>
    `
    input.value=''
}

function removeTodo(btn)
{

   const removeText=btn.parentElement
   const text=removeText.querySelector('p').textContent
   todos.removeChild(removeText)

}


