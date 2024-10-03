// Enter your code below.
let resource = document.querySelector('div.javascript-resources');
let button = document.querySelector('#show-resources');

button.addEventListener('click', (event)=>{
    resource.classList.remove('d-none');

})


 resource.addEventListener('mouseover', (event)=>{
    console.log(event.target);
    event.target.classList.add('fw-bold');
 })

 resource.addEventListener('mouseout', (event)=>{
    event.target.classList.remove('fw-bold');
 })

 resource.addEventListener('click', (event)=>{
    event.target.classList.add('fst-italic');
 })