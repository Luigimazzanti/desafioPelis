const pelis = require("./pelis");

const args = process.argv.slice(2);
const comando = args[0]; // '--search' , '--sort' ó '--tag' 
const valor = args[1]; // valor para búsqueda o clasificación


// Definir el manejador de comandos
const comandoHandler = {
    "--sort": pelis.peliSortOrder,
    "--search": pelis.peliSearch,
    "--tag": pelis.peliTags
};

// Ejecutar y mostrar el resultado
function manejarComando(comando, valor) {
    if (comando in comandoHandler) {
        if (valor) {
            const resultado = comandoHandler[comando](valor);
            console.log(resultado);
        } else {
            console.log('Debe proporcionar un valor.');
        }
    } else if (!comando && !valor) {
        // Mostrar todas las películas si no hay comandos ni valores
        const todasLasPeliculas = pelis.pelisCompletas();
        console.table(todasLasPeliculas);
    } else {
        console.log('Comando no reconocido. Usa --search, --sort o --tag: con un respectivo valor a consultar.');
    }
}

// Función principal
function main() {
    manejarComando(comando, valor);
}

// Ejecutar la función principal
main();