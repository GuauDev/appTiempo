const clave = '387c9286c5d84467da3aa810e84db8ec';

const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('buscar');

const datosEl = document.querySelector('.datos')

const ciudadEl = document.getElementById('ciudad')
const temperaturaEl = document.getElementById('temperatura')
const humedadEl = document.getElementById('humedad')
const descripcionEl = document.getElementById('descripcion')
const sensacionTermicaEl = document.getElementById('senter')
const presionEl = document.getElementById('presion') 
const errorEl = document.querySelector('.error')
buttonEl.addEventListener('click', () =>{
    const ciudad = inputEl.value;
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${ciudad}&lang=es&units=metric&appid=${clave}`)
        .then(Response => Response.json())
        .then(Response =>{
            if(Response.cod <= 300){
                const {city: {name}} = Response;
                const {main:{feels_like, pressure, temp, humidity}} = Response.list[0];
                const {description} = Response.list[0].weather[0];

                ciudadEl.innerText = name;
                temperaturaEl.innerText = Math.floor(temp);
                descripcionEl.innerHTML = description;
                sensacionTermicaEl.innerHTML = Math.floor(feels_like);
                humedadEl.innerHTML = Math.floor(humidity);
                presionEl.innerHTML = pressure;
                datosEl.style.display="flex"
            }else{
                errorEl.style.display="flex"
            }
        })
        .catch(err =>console.error(err))
})