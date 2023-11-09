/*Escribir un script que simule el lanzamiento de dos dados.
 Hacer uso de la función Math.random para obtener números 
 aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
  Sumar el resultado de lanzar dos dados y anotar en un array 
  el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/

 let dadoUno = 0;
 let dadoDos = 0;
 let sumaDados = 0;
 const numeroDeLanzamientos = 50;
 const numeroApareciones = new Array(11).fill(0);

 function tirarDado(){
    return  Math.min(Math.round(Math.random()*6)+1, 6);;
 }

 for (let index = 0; index < numeroDeLanzamientos; index++) {

    dadoUno =  tirarDado();  
    dadoDos =  tirarDado(); 
    sumaDados = dadoUno + dadoDos;
    numeroApareciones[(sumaDados-2)]++;

    document.write(` ${dadoUno} + ${dadoDos} = ${sumaDados}<br>`);
  
 }
document.write(`Numero de apariciones${numeroApareciones.length}<br>` );
for (let index = 0; index < numeroApareciones.length; index++) {
    document.write(`El numero ${index+2} - ${numeroApareciones[index]} <br>`);
    
}

document.write(`<table>`);
document.write(`<thead>`);
document.write(` <tr>`);
document.write(`<th>Suma</th>
     <th>Apariciones</th>`)     
document.write(`</tr>`);
 document.write(`</thead>`);
 document.write(`<tbody>`);

 document.write(`<tr>
     <td>Juan</td>
     <td>25</td>    
   </tr>
   <tr>
     <td>Laura</td>
     <td>23</td>    
   </tr>
   <tr>
     <td>Laura</td>
     <td>23</td>    
   </tr>`);
 document.write(`</tbody>`);
document.write(`</table>`);
