
function removeItem(itemId) {
    const item = document.getElementById(itemId);
    if (item) {
        item.remove(); 
    } else {
        console.error('Elemento no encontrado:', itemId);
    }
}
