function removeFromArray(arreglo, item) {
    
    const resultado = arreglo.filter(element => element.trim() !== item.trim());

    
    return resultado;
}


document.getElementById('removeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const arrayInput = document.getElementById('arrayInput').value;
    const itemInput = document.getElementById('itemInput').value;
    const arreglo = arrayInput.split(',').map(element => element.trim());
    const resultado = removeFromArray(arreglo, itemInput.trim());
    document.getElementById('result').textContent = `Resultado: ${resultado.join(', ')}`;
});
