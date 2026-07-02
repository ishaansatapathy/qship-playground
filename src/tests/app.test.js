describe('Tip Calculator', () => {
    let billAmountInput;
    let tipPercentageSelect;
    let tipAmountDisplay;
    let totalAmountDisplay;

    beforeEach(() => {
        document.body.innerHTML = `
            <input type='number' id='billAmount' value='100'>
            <select id='tipPercentage'>
                <option value='10'>10%</option>
                <option value='15'>15%</option>
                <option value='20'>20%</option>
            </select>
            <p id='tipAmount'>Tip: $0.00</p>
            <p id='totalAmount'>Total: $0.00</p>
        `;
        billAmountInput = document.getElementById('billAmount');
        tipPercentageSelect = document.getElementById('tipPercentage');
        tipAmountDisplay = document.getElementById('tipAmount');
        totalAmountDisplay = document.getElementById('totalAmount');
        require('./app.js'); // Import the app.js to attach event listeners
    });

    test('calculates tip correctly for 15%', () => {
        tipPercentageSelect.value = '15';
        billAmountInput.dispatchEvent(new Event('input'));
        expect(tipAmountDisplay.textContent).toBe('Tip: $15.00');
        expect(totalAmountDisplay.textContent).toBe('Total: $115.00');
    });

    test('shows error for negative bill amount', () => {
        billAmountInput.value = '-50';
        billAmountInput.dispatchEvent(new Event('input'));
        expect(tipAmountDisplay.textContent).toBe('Tip: $0.00');
        expect(totalAmountDisplay.textContent).toBe('Total: $0.00');
    });
});
