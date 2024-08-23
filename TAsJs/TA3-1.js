function duplicates(nums) {
    let count = 0;
    let numCounts = {};

    
    nums.forEach(num => {
        numCounts[num] = (numCounts[num] || 0) + 1;
    });

    
    for (let key in numCounts) {
        if (numCounts[key] > 1) {
            count++;
        }
    }

    return count;
}

document.getElementById('numbersForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const numbersInput = document.getElementById('numbersInput').value;
    const nums = numbersInput.split(',').map(num => parseInt(num.trim(), 10));
    
    
    const duplicateCount = duplicates(nums);
    
    
    document.getElementById('result').textContent = `Número de elementos duplicados: ${duplicateCount}`;
});
