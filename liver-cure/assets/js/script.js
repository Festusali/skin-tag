// Script for managing orders for Liver Purifying & Eyesight Improving Tea Website

// Assigns corresponding value to price based on product quantity
function checkForm() {
    console.log('Checking form!')
    orderQty = document.orderForm.quantity.value
    price = document.orderForm.price

    console.log(orderQty)
    if (orderQty == 1) {
        price.value = "₦18,000";
        return true;
    }
    if (orderQty == 2) {
        price.value = "₦30,000";
        return true;
    }
    if (orderQty == 3) {
        price.value = "₦43,500";
        return true;
    }
    if (orderQty == 4) {
        price.value = "₦56,000";
        return true;
    }
    if (orderQty == 5) {
        price.value = "₦65,000";
        return true;
    }
}
