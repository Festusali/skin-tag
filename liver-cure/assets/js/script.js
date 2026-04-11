// Script for managing orders for Liver Purifying & Eyesight Improving Tea Website

// Assigns corresponding value to price based on product quantity
function checkForm() {
    console.log('Checking form!')
    orderQty = document.orderForm.quantity.value
    price = document.orderForm.price

    console.log(orderQty)
    if (orderQty == 1) {
        price.value = "₦20,000";
        return true;
    }
    if (orderQty == 2) {
        price.value = "₦35,000";
        return true;
    }
    if (orderQty == 3) {
        price.value = "₦51,000";
        return true;
    }
    if (orderQty == 4) {
        price.value = "₦66,000";
        return true;
    }
    if (orderQty == 5) {
        price.value = "₦80,000";
        return true;
    }
}
