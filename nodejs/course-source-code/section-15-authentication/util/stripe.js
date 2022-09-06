exports.getStripe = (secretKey) => {
  return require('stripe')(secretKey);
};
