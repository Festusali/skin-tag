// Script for managing orders for SKIN TAG & WART REMOVER Website

// Assigns corresponding value to price based on product quantity
function checkForm() {
    orderQty = document.orderForm.quantity
    if (orderQty.value == 2) {
        document.orderForm.price.value = "₦18,500";
        return true;
    }
    if (orderQty.value == 4) {
        document.orderForm.price.value = "₦37,000";
        return true;
    }
    if (orderQty.value == 6) {
        document.orderForm.price.value = "₦55,500";
        return true;
    }
    if (orderQty.value == 8) {
        document.orderForm.price.value = "₦74,000";
        return true;
    }
    if (orderQty.value == 10) {
        document.orderForm.price.value = "₦92,500";
        return true;
    }
}
