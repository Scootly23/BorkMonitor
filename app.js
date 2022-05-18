var http = require('http')
let express = require('express')
var cors = require('cors');

let app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res) =>{
    res.send("Hello World")
})

require('./routes/messages')(app)
console.log(process.env.DATABASE_URL)

app.listen(process.env.PORT)