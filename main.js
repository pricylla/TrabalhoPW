let btn = document.getElementById('btn-div');

let container = document.querySelector('.container');

btn.addEventListener('click', function (e) {

    if (container.style.display === 'none') {

        container.style.display = 'block';

    } else {

        container.style.display = 'none';
    }
});

var capturando = "";

function capturar() {
    document.getElementById('ma').style.display = 'block'
    capturando = document.getElementById('valor').value;
    document.getElementById('valorDigitado').innerHTML = capturando;
    document.getElementById('btn-div').value = "Prosseguir";

}



/*let btn = document.getElementById('btn-div');
let container = document.getElementById('.container');
btn.addEventListener('click', function (e) {

    if (container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});

var capturando = "";

function capturar() {
    document.getElementById('ma').style.display = 'block';

    capturando = document.getElementById('valor').value;
    document.getElementById('valorDigitado').innerHTML = capturando;
    document.getElementById('btn-div').value = "prosseguir";

}*/
