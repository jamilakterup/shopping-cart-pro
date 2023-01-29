

document.getElementById('increase-btn').addEventListener('click', function () {
    const phoneQuantity = updateNumber(true, "phone-num");
    updatePrice(phoneQuantity, 'phone-total');

    SubTotalAmount()
});

document.getElementById('decrees-btn').addEventListener('click', function () {
    const phoneQuantity = updateNumber(false, "phone-num");
    updatePrice(phoneQuantity, 'phone-total');

    SubTotalAmount()
});


