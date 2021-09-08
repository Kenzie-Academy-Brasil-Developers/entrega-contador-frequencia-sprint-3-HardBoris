let typedText;
const letterCounts = {};
const wordCounts = {};
let words;
let typedText1;
let typedText2;


// console.log(typedText);
const contador = document.getElementById("countButton");
contador.addEventListener("click", function () {
    typedText = document.getElementById("textInput").value;
    typedText1 = typedText.toLowerCase();
    typedText2 = typedText1.replace(/[^a-z']+/g, "");
    
    // const words = typedText.split(/\s/);
    // const masPrueba = document.getElementById("wordsDiv");
    // const otroParrafo = document.createElement("p");
    // masPrueba.appendChild(otroParrafo);
    // otroParrafo.innerText = words;

    counter();
    respondaLetras();
});



function counter() {
    for (let i = 0; i < typedText2.length; i++) {
        let elemento = typedText2[i];
        if (letterCounts[elemento] === undefined) {
            letterCounts[elemento] = 1;
        } else {
            letterCounts[elemento]++;
        }
    }

    return letterCounts;
}

function respondaLetras() {
    const prueba = document.createElement("p");
    const otraPrueba = document.getElementById("lettersDiv");
    otraPrueba.appendChild(prueba);
    return prueba.innerHTML = Object.entries(letterCounts);
}



 
function contaPalavras() {
    words = typedText1.split(" ");
    for (let i = 0; i < words.length; i++) {
        let elemento = words[i];
        if (wordCounts[elemento] === undefined) {
            wordCounts[elemento] = 1;
        } else {
            wordCounts[elemento]++;
        }
    }

    return wordCounts;
}