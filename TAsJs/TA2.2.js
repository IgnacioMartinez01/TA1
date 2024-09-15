function getOdds(nums) {
    
    if (!Array.isArray(nums) || nums.some(num => typeof num !== 'number')) {
        console.error('El parámetro debe ser un arreglo de números.');
        return [];
    }

    
    return nums.filter(num => num % 2 !== 0);
}


document.getElementById('numbersForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const numbersInput = document.getElementById('numbersInput').value;
    const nums = numbersInput.split(',').map(num => parseInt(num.trim(), 10));
    
    
    const odds = getOdds(nums);
    
  
    document.getElementById('result').textContent = `Números impares: ${odds.join(', ')}`;
});
