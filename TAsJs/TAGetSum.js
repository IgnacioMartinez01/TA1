function getSum(nums) {
    
    return nums.reduce((acc, num) => acc + num, 0);
}


document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const input = document.getElementById('numbersInput').value;
    const nums = input.split(',').map(num => parseInt(num.trim(), 10));
    const sum = getSum(nums);
    document.getElementById('result').textContent = `La suma es: ${sum}`;
});
