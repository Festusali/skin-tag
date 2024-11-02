// Script for managing orders for Torch Light Projector

// Assigns corresponding value to price based on product quantity
function checkForm() {
    console.log('Checking form!')
    orderQty = document.orderForm.quantity.value
    price = document.orderForm.price

    console.log(orderQty)
    if (orderQty == 1) {
        price.value = "₦15,000";
        return true;
    }
    if (orderQty == 2) {
        price.value = "₦25,000";
        return true;
    }
    if (orderQty == 3) {
        price.value = "₦36,000";
        return true;
    }
    if (orderQty == 4) {
        price.value = "₦48,000";
        return true;
    }
    if (orderQty == 5) {
        price.value = "₦60,000";
        return true;
    }
}
