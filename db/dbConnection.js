const {Pool} = require("pg")

const pool = new Pool({
    host:"localhost",
    user:"schwarzj",
})

module.exports = async function(statement, params, callback) {
    const client = await pool.connect()
    await client.query(statement, params, callback)
    client.release();
}