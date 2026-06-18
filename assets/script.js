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

document.orderForm.addEventListener("submit", function () {
  disableOrderButtons();
});

// Assigns corresponding value to price based on product quantity
function getPrice(quantity) {
  const prices = {
    2: "₦22,000",
    4: "₦35,000",
    6: "₦52,000",
  };

  return prices[quantity] || "₦0.00";
}

function checkForm() {
  const form = document.orderForm;
  form.price.value = getPrice(form.quantity.value);

  return true;
}

// Assign order channel as whatsapp
document
  .getElementById("whatsappOrderBtn")
  .addEventListener("click", function () {
    const form = document.orderForm;

    if (!form.reportValidity()) {
      return;
    }

    checkForm();

    const message = {
      fullname: form.fullname.value,
      email: form.email.value,
      phone: form.phone.value,
      altPhone: form.alt_phone.value,
      quantity: form.quantity.value,
      price: form.price.value,
      state: form.state.value,
      address: form.address.value,
      product: form.productName.value,
    };

    sessionStorage.setItem("pendingWhatsappOrder", JSON.stringify(message));
    disableOrderButtons();
    form.submit();
  });
