// Script for managing orders for Torch Light Projector

// Assigns corresponding value to price based on product quantity
function checkForm() {
    console.log('Checking form!')
    orderQty = document.orderForm.quantity.value
    price = document.orderForm.price

    console.log(orderQty)
    if (orderQty == 2) {
        price.value = "₦18,000";
        return true;
    }
    if (orderQty == 4) {
        price.value = "₦35,000";
        return true;
    }
    if (orderQty == 6) {
        price.value = "₦51,000";
        return true;
    }
    if (orderQty == 8) {
        price.value = "₦66,000";
        return true;
    }
    if (orderQty == 10) {
        price.value = "₦80,000";
        return true;
    }
}
