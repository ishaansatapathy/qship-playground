document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const errorMessage = document.getElementById('errorMessage');
    const tipAmount = document.getElementById('tipAmount');
    const totalAmount = document.getElementById('totalAmount');

    errorMessage.textContent = '';
    tipAmount.textContent = '';
    totalAmount.textContent = '';

    if (isNaN(billAmount) || billAmount < 0) {
        errorMessage.textContent = 'Please enter a valid bill amount.';
        return;
    }

    if (tipPercentage === 0) {
        errorMessage.textContent = 'Please select a tip percentage.';
        return;
    }

    const tip = (billAmount * (tipPercentage / 100)).toFixed(2);
    const total = (billAmount + parseFloat(tip)).toFixed(2);

    tipAmount.textContent = `Tip: $${tip}`;
    totalAmount.textContent = `Total: $${total}`;
});
