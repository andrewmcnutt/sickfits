export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };

  const formatter = Intl.NumberFormat('en-US', options);

  // Check if it's a clean dollar amount
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  return formatter.format(amount / 100);
}
