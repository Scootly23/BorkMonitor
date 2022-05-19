const {Pool} = require('pg')
var uuid = require('uuid');
const connectionString = process.env.DATABASE_URL

const pool = new Pool({
    connectionString: connectionString,
    ssl:{
        rejectUnauthorized:false
    }
})

const saveMessage = async (message) => {
    let id = uuid.v4();
    let commandText = "INSERT INTO owner.\"Message\"(\"MessageId\",\"Body\",\"CreatedDateUTC\")"
    let date = new Date().toISOString().slice(0,19)
    commandText += ' VALUES(\''+id+'\',\''+message+'\',\''+date+'\')'

    const client = await pool.connect()
    await client.query(commandText)
    .then(res => console.log("Message saved to DB"))
    .catch(err => console.error('Error executing query', err.stack))
    await client.release()

    return id;
}

const getOwners = async () => {
    let commandText = "select * FROM owner.\"Owner\""
    let data = null;
    const client = await pool.connect()
    await client.query(commandText)
    .then( res => 
        {
            data = res.rows
        })
    .catch(err => console.error('Error executing query', err.stack))
    await client.release();
    return data;
}

exports.saveMessage = saveMessage;
exports.getOwners = getOwners;