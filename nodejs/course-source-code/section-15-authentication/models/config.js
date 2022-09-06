const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const configSchema = new Schema({
  sendgridApiKey: {
    type: String,
    required: true,
  },
  stripeSecretKey: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Config', configSchema);
