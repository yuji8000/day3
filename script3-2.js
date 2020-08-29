const element = document.getElementById('container');
let i = 0;
element.textContent = i;
const button = document.querySelector('button');
button.onclick = ()=>{
    i += 1
    element.textContent = i;
};