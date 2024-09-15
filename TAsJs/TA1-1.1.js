function reverseString(texto) {
    if (typeof texto !== 'string') {
        console.error('El parámetro debe ser una cadena de texto.');
        return '';
    }
    return texto.split('').reverse().join('');
}
document.getElementById('reverseForm').addEventListener('submit', function(event) {
    const texto = document.getElementById('textInput').value;
    const resultado = reverseString(texto);
    document.getElementById('result').textContent = resultado;
});

