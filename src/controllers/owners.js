const express = require('express')
const path = require('path');
const postgres = require("../mediators/postgresMediator")
const router = express.Router()

router
    .route('/')
    .get(async (req,res) =>{
        return await postgres.getOwners();
        // res.sendFile(path.join(__dirname, '../../public/owner/Admin.html'));
    })
    .post(async (req,res)=>{
        let id = await postgres.saveMessage(req.body.message)
        res.send(id)
    })
    

module.exports = function(app)
{
    app.use('/owners',router)
}