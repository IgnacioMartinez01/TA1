function convertToCelsius(temp) {
    
    return parseFloat(((temp - 32) * 5/9).toFixed(1));
}

function convertToFahrenheit(temp) {
    
    return parseFloat((temp * 9/5 + 32).toFixed(1));
}


document.getElementById('fahrenheitToCelsiusForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
    
    
    const celsius = convertToCelsius(fahrenheit);
    
    
    document.getElementById('celsiusResult').textContent = `${fahrenheit}°F son ${celsius}°C.`;
});


document.getElementById('celsiusToFahrenheitForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    const fahrenheit = convertToFahrenheit(celsius);
    document.getElementById('fahrenheitResult').textContent = `${celsius}°C son ${fahrenheit}°F.`;
});
