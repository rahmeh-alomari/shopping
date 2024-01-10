const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  });
  const formatCurancy = (number) => {
    return CURRENCY_FORMATTER.format(number);
  };
  
  export default formatCurancy;