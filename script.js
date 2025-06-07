function changeQty(amount) {
  const qtyInput = document.getElementById('qty');
  let current = parseInt(qtyInput.value);
  if (isNaN(current)) current = 1;
  current += amount;
  if (current < 1) current = 1;
  qtyInput.value = current;
}
