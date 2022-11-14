/*Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while.*/

const spesaArr = [];

// ciclo for
// for(let i = 0; i < 5; i++) {
//     const elem = prompt("inserisci elementi: ");
//     spesaArr.push(elem);
//     console.log(spesaArr);
//     console.log(elem);
// }

// ciclo while
let i = 0;

while(spesaArr.length < 5) {
    const elem = prompt("inserisci elementi: ");
    spesaArr.push(elem);
    console.log(spesaArr);
    console.log(elem);
    i++
}
