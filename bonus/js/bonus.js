/*Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while.*/

const spesaArr = [];

// ciclo for
// for(let i = 0; i < 5; i++) {
//     let elem;
//     spesaArr.push(elem);
//     console.log(spesaArr);
//     console.log(elem);
// }

// ciclo while
// let i = 0;

// while(spesaArr.length < 5) {
//     // chiede di inserire elementi per 5 volte
//     let elem = prompt("inserisci elementi: ");

//     // elementi vengono aggiunti all'array
//     spesaArr.push(elem);
//     console.log(spesaArr);

//     // il ciclo viene incrementato di uno e ripeto fino a qaunte volte voglio, in questo caso 5
//     i++;

//     // viene stampato a video ciò che ho inserito nell'array
//     let form = document.querySelector("#form");
//     let li = document.createElement("li");
//     li.append(elem);
//     form.append(li);
// }

// funzione al click aggiungi, posso essere aggiungere elementi alla lista
const addElem =  document.getElementById("addElem");
addElem.addEventListener("click",
    function(event){
        event.preventDefault()
        let elem = prompt("inserisci elementi: ");
        let form = document.querySelector("#form");
        let li = document.createElement("li");
        li.append(elem);
        form.append(li);
    }
);