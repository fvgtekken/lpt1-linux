let Velocidad = 1

const velocidadMaxima = 120
const velocidadMedia = 80
const velocidadMinima = 0

function aumentarVelocidad() {
    Velocidad = velocidadMaxima; 
    console.log(Velocidad);
}

function acelerar() {
    Velocidad = velocidadMedia;
    console.log(Velocidad);
}

function frenar() {
    Velocidad = velocidadMinima;
    console.log(Velocidad);
}

aumentarVelocidad();
acelerar();
frenar();