const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, err => {
        if (err) throw new Error(err);
        console.log('Guardado satisfactoriamente');
    })
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListado = () => {
    cargarDB()
    return listadoPorHacer;
};


const actualizar = (descripcion, completado) => {
    cargarDB();
    for (const item of listadoPorHacer) {
        if (item.descripcion === descripcion) {
            item.completado = completado;
            guardarDB();
            return true
        }
    }
    return false;
};

const borrar = (descripcion) => {
    cargarDB();
    for (let i = 0; i < listadoPorHacer.length; i++) {
        if (listadoPorHacer[i].descripcion === descripcion) {
            listadoPorHacer.splice(i, 1);
            guardarDB();
            return true;
        }
    }
    return false;
};


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}