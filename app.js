document.addEventListener('DOMContentLoaded', function() {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageSelect = document.getElementById('tipPercentage');
    const tipAmountDisplay = document.getElementById('tipAmount');
    const totalAmountDisplay = document.getElementById('totalAmount');

    function calculateTip() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageSelect.value);

        if (isNaN(billAmount) || billAmount < 0) {
            tipAmountDisplay.textContent = 'Tip: $0.00';
            totalAmountDisplay.textContent = 'Total: $0.00';
            return;
        }

        const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
        const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

        tipAmountDisplay.textContent = `Tip: $${tipAmount}`;
        totalAmountDisplay.textContent = `Total: $${totalAmount}`;
    }

    billAmountInput.addEventListener('input', calculateTip);
    tipPercentageSelect.addEventListener('change', calculateTip);
});
