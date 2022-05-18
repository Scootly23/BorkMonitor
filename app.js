var http = require('http')
let express = require('express')
let app = express()
app.use(express.json())

app.get('/',(req,res) =>{
    res.send("Hello World")
})

require('./routes/messages')(app)


app.listen(process.env.PORT)