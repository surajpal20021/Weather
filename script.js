function showDetils(){
    
let city = document.getElementById('delhi').value;

// key
const key = '70141833dc0fd064708971743456499f';

// api
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

fetch(url).then(data =>data.json()).then((e)=>{
console.log(e);
document.getElementById('city').innerHTML = e.name;
document.getElementById('temp').innerHTML = (e.main.temp - 273.15);
});

}