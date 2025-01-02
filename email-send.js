const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanaemail@gmail.com',
    pass: 'yourpassword'
  }
});

let mailOptions = {
  from: 'sanaemail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

