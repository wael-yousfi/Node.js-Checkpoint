const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP details
const transporter =
 nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: '----------@gmail.com', 
    pass: '**************'
  }
});

// Define the email options
const mailOptions = {
  from: '----------@gmail.com', 
  to: '+++++++++++@gmail.com', 
  subject: 'Test Email', 
  text:  'Hello from Node.js!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('An error occurred while sending the email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});