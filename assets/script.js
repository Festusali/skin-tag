// Script for managing orders for SKIN TAG & WART REMOVER Website

function disableOrderButtons() {
  const normalBtn = document.getElementById("orderNowBtn");
  const whatsappBtn = document.getElementById("whatsappOrderBtn");

  if (normalBtn) {
    normalBtn.disabled = true;
    normalBtn.innerText = "Submitting...";
  }

  if (whatsappBtn) {
    whatsappBtn.disabled = true;
    whatsappBtn.innerText = "Submitting...";
  }
}

// Assign corresponding price based on product quantity.
function getPrice(quantity) {
  const prices = {
    2: "₦24,000",
    4: "₦40,000",
    6: "₦54,000",
  };

  return prices[quantity] || "₦0.00";
}

function checkForm() {
  const form = document.orderForm;

  if (!form) {
    return false;
  }

  form.price.value = getPrice(form.quantity.value);

  return true;
}

// Standard form submission.
const orderForm = document.orderForm;

if (orderForm) {
  orderForm.addEventListener("submit", function () {
    checkForm();
    disableOrderButtons();
  });
}
