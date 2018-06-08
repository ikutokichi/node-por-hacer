const argv = require('./config/yargs').argv;
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let respuesta = crear(argv.descripcion);
        console.log(respuesta);
        break;
    case 'listar':
        let listado = getListado();
        for (const tarea of listado) {
            console.log('=======Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break
    default:
        console.log('comando no reconocido');
        break;
}