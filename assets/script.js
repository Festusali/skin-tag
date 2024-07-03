// Script for managing orders for AONISEN SKIN TAG & WART REMOVER Website

// Assigns corresponding value to price based on product quantity
function checkForm() {
    orderQty = document.orderForm.quantity
    if (orderQty.value == 2) {
        document.orderForm.price.value = "₦18,000";
        return true;
    }
    if (orderQty.value == 3) {
        document.orderForm.price.value = "₦25,500";
        return true;
    }
    if (orderQty.value == 4) {
        document.orderForm.price.value = "₦32,000";
        return true;
    }
}
