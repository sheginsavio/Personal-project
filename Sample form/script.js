function validateForm() {
    let quantity = document.getElementById("quantity").value;

    if (quantity <= 0) {
        alert("Quantity must be a positive number.");
        return false;
    }
    return true;
}
