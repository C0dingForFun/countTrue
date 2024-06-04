let values = [true, true, false, true];
let button = document.querySelector('button');
let answer = document.querySelector('span')
let value = 0

button.addEventListener('click', ()=>{
    for (const bool of values) { //loop through the array values
        if(bool == true){
            value++
        }
    }
    answer.innerText = value;
})
