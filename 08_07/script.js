/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const tipCalculator = (sum, percentage, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
  Sum before tip: ${sum}${currency}
  Tip percentage: ${percentage}%${currency}
  Tip:            ${tip.toFixed(2)}${currency}
  Total:          ${total.toFixed(2)}${currency}
`);
};

tipCalculator(500, 14, "€");
