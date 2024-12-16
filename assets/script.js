// Script for managing orders for SKIN TAG & WART REMOVER Website

// Assigns corresponding value to price based on product quantity
function checkForm() {
    orderQty = document.orderForm.quantity
    if (orderQty.value == 1) {
        document.orderForm.price.value = "₦16,500";
        return true;
    }
    if (orderQty.value == 2) {
        document.orderForm.price.value = "₦26,000";
        return true;
    }
    if (orderQty.value == 3) {
        document.orderForm.price.value = "₦37,500";
        return true;
    }
    if (orderQty.value == 4) {
        document.orderForm.price.value = "₦48,000";
        return true;
    }
}
