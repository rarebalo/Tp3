//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
// Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write(`<h2> Lista de Meses </h2>`);
document.write(`<ul>`);

for (let index = 0; index < meses.length; index++) {
    document.write(`<li>${meses[index]}</li>`);    
}

document.write(`</ul>`);