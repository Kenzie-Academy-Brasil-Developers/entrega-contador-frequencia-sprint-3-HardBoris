let txtInicial;
let txtModificado;
let palabrasSeparadas;
const contaLetras = {};
const contaPalavras = {};
const txtEntrada = document.getElementById("textInput");
const contador = document.getElementById("countButton");

contador.addEventListener("click", function () {
    txtInicial = txtEntrada.value;
    modificaTexto();
    separaPalabras();
    counter(txtModificado, contaLetras);
    counter(palabrasSeparadas,contaPalavras);
    vista(contaLetras, "lettersDiv");
    vista(contaPalavras, "wordsDiv")
    txtEntrada.value = "";
});

function modificaTexto() {
    txtModificado = txtInicial.toLowerCase();
    txtModificado = txtModificado.replace(/[^a-z']+/g, "");
    return txtModificado;
}

function separaPalabras() {
    palabrasSeparadas = txtInicial.toLowerCase();
    palabrasSeparadas = palabrasSeparadas.replace(/[^a-z'\s]+/g, "");
    palabrasSeparadas = palabrasSeparadas.split(" ");
    return palabrasSeparadas;
}

function counter(txt, object) {
    for (let i = 0; i < txt.length; i++) {
        let j = txt[i];
        if (object[j] === undefined) {
            object[j] = 1;
        } else {
            object[j]++;
        }
    }

    return object;
}



function vista(object, txtId) {
    for (const [key, value] of Object.entries(object)) {
        const parrafo = document.createElement("p");
        const otraPrueba = document.getElementById(txtId);
        otraPrueba.appendChild(parrafo);
        parrafo.innerText = (`${key}: ${value}`);
        
    }
}



 


