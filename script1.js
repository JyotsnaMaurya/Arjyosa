function loginFunction() {
      alert("Login Successful! (Yeh abhi demo version hai)");
      return false;
    }

    const otherRadio = document.getElementById('otherRadio');
    const otherAmountInput = document.getElementById('otherAmount');
    const paymentForm = document.getElementById('paymentForm');

    paymentForm.amount.forEach(radio => {
      radio.addEventListener('change', () => {
        if (otherRadio.checked) {
          otherAmountInput.disabled = false;
          otherAmountInput.required = true;
          otherAmountInput.focus();
        } else {
          otherAmountInput.disabled = true;
          otherAmountInput.required = false;
          otherAmountInput.value = '';
        }
      });
    });

     paymentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let amount;
      if (otherRadio.checked) {
        amount = otherAmountInput.value;
        if (!amount || isNaN(amount) || amount < 100) {
          alert('Please enter a valid amount (minimum ₹100)');
          return;
        }
      } else {
        amount = paymentForm.amount.value;
      }
      alert('You are paying ₹' + amount + '. Proceeding to payment gateway...');
    });


// Enable/disable custom amount field
paymentForm.amount.forEach(radio => {
  radio.addEventListener('change', () => {
    if (otherRadio.checked) {
      otherAmountInput.disabled = false;
      otherAmountInput.required = true;
      otherAmountInput.focus();
    } else {
      otherAmountInput.disabled = true;
      otherAmountInput.required = false;
      otherAmountInput.value = '';
    }
  });
});

// Handle form submit
paymentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let amount;

  if (otherRadio.checked) {
    amount = otherAmountInput.value;
    if (!amount || isNaN(amount) || amount < 100) {
      alert('Please enter a valid amount (minimum ₹100)');
      return;
    }
  } else {
    amount = paymentForm.amount.value;
  }

  alert('You are paying ₹' + amount + '. Proceeding to payment gateway...');
  // Add payment gateway integration code here
});

