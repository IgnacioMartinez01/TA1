
function generatePassword(length) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allCharacters = lowercase + uppercase + numbers + symbols;

    if (length < 8) length = 8;
    
    let password = '';
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    for (let i = password.length; i < length; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    
    return password.split('').sort(() => Math.random() - 0.5).join('');
}


function findTheOldest(people) {
    return people.reduce((oldest, person) => {
        return person.age > oldest.age ? person : oldest;
    }, people[0]);
}
function getOdds(nums) {
    return nums.filter(num => num % 2 !== 0);
}

function getSum(nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}
function sumAll(a, b) {
    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i;
    }
    return sum;
}

function convertToCelsius(temp) {
    return Math.round((temp - 32) * 5 / 9 * 10) / 10;
}

function convertToFahrenheit(temp) {
    return Math.round((temp * 9 / 5) + 32 * 10) / 10;
}

function leapYears(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


function duplicates(nums) {
    const counts = {};
    let duplicateCount = 0;
    nums.forEach(num => counts[num] = (counts[num] || 0) + 1);
    for (let key in counts) {
        if (counts[key] > 1) duplicateCount++;
    }
    return duplicateCount;
}

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const task = document.getElementById('taskSelect').value;
    let result = '';
    
    if (task === 'generatePassword') {
        const length = parseInt(document.getElementById('passwordLength').value, 10);
        result = `Contraseña generada: ${generatePassword(length)}`;
    } else if (task === 'findTheOldest') {
        const input = document.getElementById('peopleInput').value;
        const peopleArray = input.split(',').map((item, index, arr) => {
            return index % 2 === 0 ? { name: item.trim(), age: parseInt(arr[index + 1].trim(), 10) } : null;
        }).filter(person => person !== null);
        const oldestPerson = findTheOldest(peopleArray);
        result = `La persona más vieja es: ${oldestPerson.name}, con ${oldestPerson.age} años.`;
    } else if (task === 'getOdds') {
        const input = document.getElementById('oddsInput').value;
        const nums = input.split(',').map(num => parseInt(num.trim(), 10));
        result = `Números impares: ${getOdds(nums).join(', ')}`;
    } else if (task === 'getSum') {
        const input = document.getElementById('sumInput').value;
        const nums = input.split(',').map(num => parseInt(num.trim(), 10));
        result = `La suma es: ${getSum(nums)}`;
    } else if (task === 'sumAll') {
        const a = parseInt(document.getElementById('sumA').value, 10);
        const b = parseInt(document.getElementById('sumB').value, 10);
        result = `La suma entre ${a} y ${b} es: ${sumAll(a, b)}`;
    } else if (task === 'convertToCelsius') {
        const tempFahrenheit = parseFloat(document.getElementById('fahrenheitTemp').value);
        result = `Temperatura en Celsius: ${convertToCelsius(tempFahrenheit)}°C`;
    } else if (task === 'convertToFahrenheit') {
        const tempCelsius = parseFloat(document.getElementById('celsiusTemp').value);
        result = `Temperatura en Fahrenheit: ${convertToFahrenheit(tempCelsius)}°F`;
    } else if (task === 'leapYears') {
        const year = parseInt(document.getElementById('yearInput').value, 10);
        result = `¿El año ${year} es bisiesto? ${leapYears(year)}`;
    } else if (task === 'duplicates') {
        const input = document.getElementById('duplicatesInput').value;
        const nums = input.split(',').map(num => parseInt(num.trim(), 10));
        result = `Número de elementos duplicados: ${duplicates(nums)}`;
    }
    document.getElementById('result').textContent = result;
    document.querySelectorAll('.taskFields').forEach(field => field.style.display = 'none');
    document.getElementById(`${task}Fields`).style.display = 'block';
});
