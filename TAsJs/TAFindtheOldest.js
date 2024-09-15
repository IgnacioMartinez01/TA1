function findTheOldest(people) {
    return people.reduce((oldest, person) => {
        return person.age > oldest.age ? person : oldest;
    }, people[0]);
}


document.getElementById('personForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const input = document.getElementById('peopleInput').value;
    const peopleArray = input.split(',').map((item, index, arr) => {
        return index % 2 === 0 ? { name: item.trim(), age: parseInt(arr[index + 1].trim(), 10) } : null;
    }).filter(person => person !== null);
    
    
    const oldestPerson = findTheOldest(peopleArray);
    
    
    document.getElementById('result').textContent = `La persona más vieja es: ${oldestPerson.name}, con ${oldestPerson.age} años.`;
});
