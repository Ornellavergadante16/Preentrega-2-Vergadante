const productos = [
    { id: 1, nombre: "Palo", precio: 180000, img: "bolso.jpg" },
    { id: 2, nombre: "Bolso", precio: 90000, img: "bolso.jpg" },
    { id: 3, nombre: "Botines", precio: 55000, img: "botines.jpg" },
    { id: 4, nombre: "Canilleras", precio: 17000, img: "canilleras.jpg" },   
    { id: 5, nombre: "Bocha", precio: 3500, img: "bocha.jpg"},
];

function Producto (nombre, precio, img) {
    this.id = productos.length + 1;
    this.nombre = nombre;
    this.precio = parseFloat (precio);
    this.img = img;
    }

function buscar(arr, filtro) {
    const producto = arr.find((el) => el.precio < filtro);

    return producto;
}

function buscarPorNombre(arr, filtro) {
    const producto = arr.find((el) => el.nombre.includes(filtro));

    return producto;
}

function filtrarPorPrecio(arr, filtro) {
    const producto = arr.filter((el) => el.precio < filtro);

    return producto;
}

let caract = prompt ("Buscar por categoria")
let param = prompt ("Buscar por precio");

const mayorPrecio = filtrarPorPrecio(productos, param);
console.log(mayorPrecio);

const producEncontrado = buscarPorNombre (productos, param);
console.log(producEncontrado);


function filtrar (arr, filtro, caract) {
    return arr.filter ((el) => {
        if (caract === "id") {
            return el.id == filtro;
        } else if (caract === "precio") {
            return el.precio <= filtro;
        } else {
            return el[caract].includes(filtro);
        }
    });
}
