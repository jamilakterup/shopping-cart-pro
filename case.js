

document.getElementById('increase-case').addEventListener('click', function () {
    const caseQuantity = updateNumber(true, "case-num");
    updatePrice(caseQuantity, 'case-total');

    SubTotalAmount()
});

document.getElementById('decrees-case').addEventListener('click', function () {
    const caseQuantity = updateNumber(false, "case-num");
    updatePrice(caseQuantity, 'case-total');

    SubTotalAmount()
});