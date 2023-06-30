const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function atualizarRelogio() {
    const dataAtual = new Date();
    let hr = dataAtual.getHours();
    let min = dataAtual.getMinutes();
    let sec = dataAtual.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
}

// Chamar a função para atualizar o relógio inicialmente
atualizarRelogio();

// Atualizar o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
