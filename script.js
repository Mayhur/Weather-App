let Submit = document.querySelector('.submit')
let input = document.querySelector('.input')
Submit.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=bf6b40d6dfdd5c9e4f5e7c97c7560e40')
.then(response => response.json())
.then(data =>console.log(data)) 
})
