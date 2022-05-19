const nodemailer = require('nodemailer');
const username = process.env.EmailUsername;
const password = process.env.EmailPass;

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
        user: username,
        pass: password
    }
});
console.log(username,password)

const sendMessage = (number, message) =>{
    console.log(username,password)

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
