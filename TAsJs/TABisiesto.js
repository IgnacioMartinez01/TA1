function leapYears(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


document.getElementById('leapYearForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const year = parseInt(document.getElementById('yearInput').value, 10);
    
    
    const isLeapYear = leapYears(year);
    
    
    document.getElementById('result').textContent = 
        isLeapYear ? `${year} es un año bisiesto.` : `${year} no es un año bisiesto.`;
});
