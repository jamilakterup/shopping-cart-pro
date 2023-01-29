
function updateNumber(isTrue, fieldId) {
    const phone = document.getElementById(fieldId);
    const phoneValueStr = phone.value;
    const phoneValue = parseInt(phoneValueStr);
    let price;
    if (isTrue) {
        price = phoneValue + 1;
    } else {
        price = phoneValue - 1;
    }
    phone.value = price;
    return price;
}


function updatePrice(prompt, pId) {
    if (pId == 'phone-total') {
        mlTotalPrice = prompt * 1219;
        const phoneTotal = document.getElementById(pId);
        phoneTotal.innerText = mlTotalPrice;
    } else {
        caseTotalPrice = prompt * 59;
        const caseTotal = document.getElementById(pId);
        caseTotal.innerText = caseTotalPrice;
    }
}


function getTotalById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalString = phoneTotalElement.innerText;
    const phoneTotal = parseInt(phoneTotalString);
    return phoneTotal;
}


function totalId(arguments, value) {
    const subTotalGiven = document.getElementById(arguments);
    subTotalGiven.innerText = value;
}


function SubTotalAmount() {
    const currentPhoneTotal = getTotalById('phone-total')
    const currentCaseTotal = getTotalById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    totalId('sub-total', currentSubTotal);

    const totalTax = (currentSubTotal * 0.01).toFixed(2);
    const taxVal = parseFloat(totalTax);
    totalId('tax', taxVal);

    const finalAmount = currentSubTotal + taxVal;
    totalId('total-cost', finalAmount);
}

