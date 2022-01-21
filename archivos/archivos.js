const fs = require('fs');
const path = require('path');
const pathArchivo = 'salida';

const crearArchivo = (base) => {
    const promesa = new Promise((resolve, reject) => {
        const nombreArchivo = `tabla-${base}.txt`;
        let datos = '';
        for (let i = 1; i < 11; i++) {
            datos += `${base} x ${i} = ${base*i} \n`;
        }
        fs.writeFile(path.join(pathArchivo, nombreArchivo), datos, (err) => {
            if (err) reject(err.message);
            resolve({ nombreArchivo, datos });
        });
    });
    return promesa;
}

module.exports = { crearArchivo };