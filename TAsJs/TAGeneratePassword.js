function generatePassword(length) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allCharacters = lowercase + uppercase + numbers + symbols;

    if (length < 8) {
        length = 8; 
    }

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


document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const length = parseInt(document.getElementById('lengthInput').value, 10);
    
    
    const password = generatePassword(length);
    
    
    document.getElementById('result').textContent = `Contraseña generada: ${password}`;
});
