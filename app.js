document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';

    if (isNaN(billAmount) || billAmount < 0) {
        errorMessage.textContent = 'Please enter a valid bill amount.';
        return;
    }

    if (tipPercentage === 0) {
        errorMessage.textContent = 'Please select a tip percentage.';
        return;
    }

    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

    document.getElementById('tipAmount').textContent = `Tip: $${tipAmount}`;
    document.getElementById('totalAmount').textContent = `Total: $${totalAmount}`;
});
