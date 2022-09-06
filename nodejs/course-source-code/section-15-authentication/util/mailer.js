const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

exports.getTransporter = (apiKey) => {
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: apiKey,
      },
    })
  );
  return transporter;
};
