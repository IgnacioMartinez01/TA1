function getTheTitles(books) {
        if (!Array.isArray(books)) {
        console.error('El parámetro debe ser un arreglo.');
        return [];
    }
    return books.map(book => book.title);
}


document.getElementById('booksForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const booksInput = document.getElementById('booksInput').value;
    let books;
    try {
        books = JSON.parse(booksInput);
    } catch (e) {
        document.getElementById('result').textContent = 'Error: El JSON proporcionado no es válido.';
        return;
    }
    const titles = getTheTitles(books);
    document.getElementById('result').textContent = `Títulos: ${titles.join(', ')}`;
});
