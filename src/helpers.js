export function calc(amount, term) {
  //Amounts
  // 0 - 1000 25 %
  // 1001 - 5000 20%
  // 5001 - 10000 15%
  // +10000 - 10%

  let finalAmount;
  if (amount <= 1000) {
    finalAmount = amount * 0.25;
  } else if (amount > 1000 && amount <= 5000) {
    finalAmount = amount * 0.2;
  } else if (amount > 5000 && amount <= 10000) {
    finalAmount = amount * 0.15;
  } else {
    finalAmount = amount * 0.1;
  }

  // calc term
  // 3 = 5%
  // 6 = 10%
  // 12 = 15%
  // 24 = 20%

  let finalTerm = 0;
  switch (term) {
    case 3:
      finalTerm = amount * 0.05;
      break;
    case 6:
      finalTerm = amount * 0.1;
      break;
    case 12:
      finalTerm = amount * 0.15;
      break;
    case 24:
      finalTerm = amount * 0.2;
      break;

    default:
      break;
  }
  return finalTerm + finalAmount + amount;
}
