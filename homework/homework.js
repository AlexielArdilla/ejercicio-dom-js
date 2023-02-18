// Obtener la referencia de todos los divs en una constante llamada "divs".
//Escriba aquí su código:
let divs = document.querySelectorAll("div");
/*
Al obtener la referencia de los divs, usted podrá iterar estos mismos contenedores con métodos de javascript, cómo while o for.
*/

//Paso 1: recorra todos los divs del document.
divs.forEach((item) => {
    console.log(item);
});
//Paso 2: En cada iteración usted tendrá que agregarle el texto "box" a cada una de las cajas, dejando como resultado "box 1", "box 2" y "box 3"
//Pista: repasar la propiedad innerText
//Paso 3: Con la propiedad "style" pintar cada uno de las cajas de un color: box 1 en rojo, box 2 en verde, y box 3 en azul.
// Usted podría seleccionar cada elemento div, pero no tendría sentido si ya tenemos la referencia divs, aprovechar la iteración y realizar condicionales para obtener el resultado.
//Escriba aquí su código:

for (let i = 0; i < 3; i++) {

    divs[i].innerText = `box ${i + 1}`;
    
    switch (i) {
        case 0:
            divs[i].style.backgroundColor = "red";
            break;
        case 1:
            divs[i].style.backgroundColor = "green";
            break;
        case 2:
            divs[i].style.backgroundColor = "blue";
            break;
        default:
            console.log("Error");
            break;
    }

   
}





