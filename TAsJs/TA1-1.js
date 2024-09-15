
/*
function reapeatString(text,reps){
    let button=document.getElementById("button1").value;
    for (i in reps){
    console.log(text)
} 
}

const input1 =document.getElementById("reps");
const input2=document.getElementById("texto");
const paragraph = document.createElement("p");
paragraph.textContent="ajhsdhjflkdf";//asi agrego texto a un p

const button=document.getElementById("button1");
button.addEventListener("click",reapeatString(input1,input2));
*/

function repeatString(texto, repeticiones) {
    if (typeof texto !== 'string' || typeof repeticiones !== 'number' || repeticiones < 0 || !Number.isInteger(repeticiones)) {
        console.error('Datos inválidos, el texto debe ser una cadena y las repeticiones son un número entero positivo.');
        return '';
    }
    let resultado = '';
    for (let i = 0; i < repeticiones; i++) {
        resultado += texto;
    }
    return resultado;
}


document.getElementById('repeatForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const texto = document.getElementById('textInput').value;
    const repeticiones = parseInt(document.getElementById('repeatCount').value, 10);
    const resultado = repeatString(texto, repeticiones);
    document.getElementById('result').textContent = resultado;
});
