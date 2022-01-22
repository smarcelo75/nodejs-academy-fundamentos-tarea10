const colors = require('colors');

const temas = [{
        titulo: colors.rainbow,
        linea: colors.green,
        base: colors.white,
        datos: colors.yellow,
        x: colors.red,
        igual: colors.gray
    },
    {
        titulo: colors.green,
        linea: colors.red,
        base: colors.yellow,
        datos: colors.red,
        x: colors.yellow,
        igual: colors.white
    },
    {
        titulo: colors.green,
        linea: colors.green,
        base: colors.green,
        datos: colors.green,
        x: colors.green,
        igual: colors.green
    }
];

const aplicarTema = (base, tema = 0) => {
    console.log(temas[tema].linea('========================'));
    console.log(temas[tema].titulo('Tabla del ') + temas[tema].base(base));
    console.log(temas[tema].linea('========================'));
    let datos = '';
    for (let i = 1; i < 11; i++) {
        datos += temas[tema].base(`${base}`) +
            temas[tema].x(' x ') + temas[tema].datos(`${i}`) +
            temas[tema].igual(' = ') +
            temas[tema].datos(`${base*i}`) + '\n';
    }
    console.log(datos);
    console.log(temas[tema].linea('========================'));
}

module.exports = {
    aplicarTema
}