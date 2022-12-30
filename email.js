const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'robeilaregawi1@gmail.com',
        pass: 'dkmzfknmayylfllw'
    }
});

let mailOptions = {
    from: 'robeilaregawi1@gmail.com',
    to: 'aregawirobeil1@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent : ' + info.response);
    }
});