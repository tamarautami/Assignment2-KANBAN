const input = document.querySelector('input');
const btn = document.querySelector('.addTask .card-footer > button');

btn.addEventListener('click', addList);

function addList(e){
    const todo = document.querySelector('.addTask .card-body');
    const progres = document.querySelector('.onProgres .card-body')
    const finish = document.querySelector('.finish .card-body');

    const newLi = document.createElement('li');
    const nextBtn = document.createElement('button');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
    checkBtn.innerHTML = '<i class="fa fa-check"></i>'
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value = '';
        todo.appendChild(newLi);
        newLi.appendChild(nextBtn);
        newLi.appendChild(delBtn);
    }


    nextBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        progres.appendChild(parent);  
        nextBtn.style.display = 'none';
        newLi.appendChild(checkBtn);
    });

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        finish.appendChild(parent);
        nextBtn.style.display = 'none';
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove(); 
    });
}