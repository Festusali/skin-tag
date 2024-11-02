// Script for managing orders for Liver Purifying & Eyesight Improving Tea Website

// Assigns corresponding value to price based on product quantity
function checkForm() {
    console.log('Checking form!')
    orderQty = document.orderForm.quantity.value
    price = document.orderForm.price

    console.log(orderQty)
    if (orderQty == 2) {
        price.value = "₦18,500";
        return true;
    }
    if (orderQty == 4) {
        price.value = "₦36,000";
        return true;
    }
    if (orderQty == 6) {
        price.value = "₦53,000";
        return true;
    }
}
