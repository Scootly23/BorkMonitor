var http = require('http')
let express = require('express')
var cors = require('cors');

let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'));


app.get('/',(req,res) =>{
    res.send("Hello World")
})
console.log(process.env)
require('./src/controllers/messages')(app)
require('./src/controllers/owners')(app)


app.listen(process.env.PORT)