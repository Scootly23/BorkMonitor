const express = require('express')
const path = require('path');
const postgres = require("../mediators/postgresMediator")
const mailer = require("../mediators/textMessagingMediator")
const router = express.Router()

router
    .route('/')
    .get((req,res) =>{
        res.sendFile(path.join(__dirname, '../../public/message/PostMessage.html'));
    })
    .post(async (req,res)=>{
        let message = req.body.message;
        let id = await postgres.saveMessage(message);
        await postgres.getOwners().then(owners =>{
            mailer.sendMessagesToOwners(owners,message);
        })
        res.send(id)
    })
    

module.exports = function(app)
{
    app.use('/messages',router)
}