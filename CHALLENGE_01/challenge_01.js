const fs = require('node:fs/promises');
const clc = require("cli-color");
const spinners = require('cli-spinners');


//? Animacion de carga
function loadingAnimation() {
  const spinner = spinners.dots12;

  let i = 0;
  const interval = setInterval(() => {
    const { frames, interval: speed } = spinner;
    process.stdout.write(`\r${frames[i]} Loading...`);
    i = (i + 1) % frames.length;
  }, spinner.interval);

  return () => {
    clearInterval(interval);
    process.stdout.write('\r'); // Limpia la línea de salida
  };
}

console.clear();
console.log(clc.blueBright('🚀 ¿Estás listo para desencriptar el archivo? 🚀'));


// Iniciamos un contador de 2s
setTimeout(() => {

const stopAnimation = loadingAnimation();
    console.log();
    console.log(clc.red('La verdad no me importa si estás listo 😈'));

    // Creamos otro contador de 2s
    setTimeout(() => {
        // Leemos el archivo y lo decodificamos
        fs.readFile('./messaje_01.txt', 'utf8')
            .then(text => {
                stopAnimation(); // Detén la animación antes de mostrar el resultado

                const desencriptado = text.toLowerCase().split(' ').reduce((acc, word) => {
                    if (acc.includes(word)) {
                        acc[acc.indexOf(word) + 1] += 1;
                    } else {
                        acc.push(word, 1, ' ');
                    }
                    return acc;
                }, []).join('');

                console.log(`${desencriptado} `);

            })
            .catch(error => {
                stopAnimation(); // Detén la animación en caso de error
                console.error('Error al leer el archivo:', error);
            });

    }, 2000);
}, 2000);
