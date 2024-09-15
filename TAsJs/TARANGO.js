
function sumTwoNumbers(a, b) {
    
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    
    
    return a + b;
}


document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const a = parseInt(document.getElementById('inputA').value, 10);
    const b = parseInt(document.getElementById('inputB').value, 10);
    
    
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').textContent = 'Por favor, ingrese valores numéricos válidos.';
        return;
    }
    
    
    const totalSum = sumTwoNumbers(a, b);
    
    
    document.getElementById('result').textContent = `La suma de ${a} y ${b} es: ${totalSum}`;
});
