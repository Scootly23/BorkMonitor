const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EmailUsername,
        pass: process.env.EmailPass
    }
});
console.log(process.env)

const sendMessage = (number, message) =>{
    let mailOptions ={
        from: "johan.phillips12@gmail.com",
        to: number+"@vtext.com",
        text:  message,
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(mailOptions)
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

const sendMessagesToOwners = (owners, message) =>{
    console.log(owners, message)
    owners.forEach(o => sendMessage(o.PhoneNumber,message));
}

module.exports.sendMessagesToOwners = sendMessagesToOwners;
