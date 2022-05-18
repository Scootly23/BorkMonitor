var http = require('http')
let express = require('express')
let app = express()
app.use(express.json())

app.get('/',(req,res) =>{
    res.send("Hello World")
})

app.post('/Messages',(req,res)=>{
    console.log(req.body)
    res.send(req.body.message)
    
})

app.listen(process.env.PORT)