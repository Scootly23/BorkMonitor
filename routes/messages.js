const express = require('express')
const path = require('path');
const postgres = require("../mediators/postgresMediator")
const router = express.Router()

router
    .route('/')
    .get((req,res) =>{
        res.sendFile(path.join(__dirname, '../views/PostMessage.html'));
    })
    .post(async (req,res)=>{
        let id = await postgres.saveMessage(req.body.message)
        res.send(id)
    })
    

module.exports = function(app)
{
    app.use('/messages',router)
}