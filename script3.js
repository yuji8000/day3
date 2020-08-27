const elements = document.querySelectorAll('td');
for(let i = 0; i < elements.length; i++ ){
    elements[i].textContent = (i%9 + 1)*Math.floor(i/9 + 1);
}