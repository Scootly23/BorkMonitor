const {Pool} = require('pg')
var uuid = require('uuid');
const connectionString = 'postgres://kdgfmognzmhxdm:8a1091e987bf85bfaeaabe8c8f930fbe721d699077ad6de374d86e86423bcdc5@ec2-54-157-79-121.compute-1.amazonaws.com:5432/d21b1d7h1gfkn6'

const pool = new Pool({
    connectionString: connectionString,
    ssl:{
        rejectUnauthorized:false
    }
})

const saveMessage = async (message) => {
    let id = uuid.v4();
    let commandText = "INSERT INTO owner.\"Message\"(\"MessageId\",\"Body\")"
    commandText += ' VALUES(\''+id+'\',\''+message+'\')'

    const client = await pool.connect()
    await client.query(commandText)
    .then(res => console.log("Message saved to DB"))
    .catch(err => console.error('Error executing query', err.stack))
    client.release()

    return id;
}

exports.saveMessage = saveMessage;