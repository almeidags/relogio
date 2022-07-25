const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    horas.textContent = String(hr).padStart(2, '0');
    minutos.textContent = String(min).padStart(2, '0');
    segundos.textContent = String(sec).padStart(2, '0');
})