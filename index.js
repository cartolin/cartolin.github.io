
let contentFondo = document.querySelector('.fondo');
let contentBody = document.querySelector('#cuerpo');
let redNeuronal = new brain.NeuralNetwork();

redNeuronal.train([
    //fondo negro, 0 salida blanco 1
    { input: { rojo: 0, verde: 0, azul: 0 }, output: { color: 1 } },
    //fondo blanco, 1 salida negro o
    { input: { rojo: 1, verde: 1, azul: 1 }, output: { color: 0 } },
    //fondo verde texto negro
    { input: { rojo: 0, verde: 1, azul: 0 }, output: { color: 0 } },
]);

function update(color) {
    let rgd = [color.channels.r, color.channels.g, color.channels.r]
    //console.log(contentBody, color.toHEXString());
    contentFondo.style.background = color.toHEXString();
    //contentBody.style.background = color.toHEXString();

    entrada = {
        rojo: rgd[0] / 255,
        verde: rgd[1] / 255,
        azul: rgd[2] / 255
    }
    const resultado = redNeuronal.run(entrada);
    if (resultado.color > .5) {
        contentFondo.style.color = 'white';
        contentBody.style.color = 'white';
    }
    else {
        contentFondo.style.color = 'black';
        contentBody.style.color = 'black';
    }
}