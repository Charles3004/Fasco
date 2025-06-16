function changeQty(amount) {
  const qtyInput = document.getElementById('qty');
  let current = parseInt(qtyInput.value);
  if (isNaN(current)) current = 1;
  current += amount;
  if (current < 1) current = 1;
  qtyInput.value = current;
}

// Cart quantity update
document.addEventListener('DOMContentLoaded', () => {
  const quantityInputs = document.querySelectorAll('.cart-table input[type="number"]');
  quantityInputs.forEach(input => {
    input.addEventListener('change', updateTotal);
  });

  const applyBtn = document.querySelector('.cart-summary button');
  if (applyBtn) {
    applyBtn.addEventListener('click', applyDiscountCode);
  }
});

function updateTotal() {
  const input = this;
  const row = input.closest('tr');
  const price = parseFloat(row.children[1].textContent.replace('$', ''));
  const totalCell = row.children[3];
  const qty = parseInt(input.value);
  totalCell.textContent = `$${(price * qty).toFixed(2)}`;
}

function applyDiscountCode() {
  alert("Promo code applied (this is a demo)");
}

// Confirm code page
function validateConfirmCode() {
  const input = document.querySelector('.auth-form input[type="text"]');
  if (!input.value.trim()) {
    alert("Please enter the confirmation code.");
    return false;
  }
  alert("Confirmation code accepted (demo)");
  return true;
}

// Forgot password page
function validateResetForm() {
  const email = document.querySelector('.auth-form input[type="email"]');
  const pass = document.querySelector('.auth-form input[type="password"]');
  if (!email.value.trim() || !pass.value.trim()) {
    alert("Please fill in all fields.");
    return false;
  }
  alert("Password has been reset (demo)");
  return true;
}

function login() {
  const email = document.querySelector('input[type="email"]');
  const password = document.querySelector('input[type="password"]');
  if (!email.value || !password.value) {
    alert("Please enter both email and password.");
    return;
  }
  alert("Login successful (demo)");
}

function register() {
  const name = document.querySelector('input[placeholder="Full Name"]');
  const email = document.querySelector('input[placeholder="Email Address"]');
  const password = document.querySelector('input[placeholder="Password"]');
  if (!name.value || !email.value || !password.value) {
    alert("Please fill in all fields.");
    return;
  }
  alert("Account created successfully (demo)");
}

function resetPassword() {
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;

  if (!newPass || !confirmPass) {
    alert("Please fill in both fields.");
    return;
  }

  if (newPass !== confirmPass) {
    alert("Passwords do not match.");
    return;
  }

  alert("Password reset successful (demo)");
}
