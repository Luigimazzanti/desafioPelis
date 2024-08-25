const fs = require ("fs");

function pelisAll (){
    const pelisJson = fs.readFileSync(__dirname +"/pelis.json")
    return JSON.parse(pelisJson);
};


exports.pelisCompletas = function (){
    const pelisJson = pelisAll();
    return pelis;
};

exports.peliSortOrder = function (valor){
    const pelisJson = pelisAll();
    let pelisOrdenadas = [];
    if (valor === 'title') {
        // Ordena las películas por el campo 'title'
        pelisOrdenadas = pelisJson.sort((a, b) => a.title.localeCompare(b.title));
    } else if (valor === 'rating') {
        // Ordena las películas por el campo 'rating'
        pelisOrdenadas = pelisJson.sort((a, b) => b.rating - a.rating);
    } else {
        console.log('Campo de ordenación no reconocido. Usa "title" o "rating".');
    }

    return pelisOrdenadas;
};

exports.peliSearch = function (valor){
    const pelisJson = pelisAll();
    const pelisEncontradas = pelisJson.filter(pelicula => {
        return pelicula.title.toLowerCase().includes(valor.toLowerCase());
    });

    if (pelisEncontradas.length === 0) {
        console.log("No hemos encontrado coincidencias en nuestra base de datos.");
    }
    return pelisEncontradas;
};

exports.peliTags = function (valor){
    const pelisJson = pelisAll();
    const busqueda = pelisJson.filter(pelicula=>{
        return pelicula.tags.some(tag => tag.toLowerCase().includes(valor.toLowerCase()));
    });

    if (busqueda.length === 0) {
        console.log("No hemos encontrado coincidencias en nuestra base de datos.");
    }

    return busqueda;
};

