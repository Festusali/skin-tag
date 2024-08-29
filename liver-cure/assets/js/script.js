// Script for managing orders for Liver Purifying & Eyesight Improving Tea Website

// Assigns corresponding value to price based on product quantity
function checkForm() {
    console.log('Checking form!')
    orderQty = document.orderForm.quantity.value
    price = document.orderForm.price

    console.log(orderQty)
    if (orderQty == 1) {
        price.value = "₦16,500";
        return true;
    }
    if (orderQty == 2) {
        price.value = "28,000";
        return true;
    }
    if (orderQty == 3) {
        price.value = "40,500";
        return true;
    }
    if (orderQty == 4) {
        price.value = "52,000";
        return true;
    }
    if (orderQty == 5) {
        price.value = "62,500";
        return true;
    }
}
