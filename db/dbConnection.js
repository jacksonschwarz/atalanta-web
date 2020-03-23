// const {Pool} = require("pg")

// const pool = new Pool({
//     host:"localhost",
//     user:"schwarzj",
// })

// module.exports = async function(statement, params, callback) {
//     const client = await pool.connect()
//     await client.query(statement, params, callback)
//     client.release();
// }

//from https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
String.prototype.format = function() {
    var formatted = this;
    let argArray = arguments[0]
    for (var i = 0; i < argArray.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, argArray[i]);
    }
    return formatted;
};

const mysql = require("mysql");
var connection = mysql.createConnection({
    host: "atalantaserver.mysql.database.azure.com",
    user: "millerk9@atalantaserver",
    password:"DanaScully2112!@!",
    database:"atalanta"
})

module.exports = function(statement, params, callback) {
    let newStatement;
    if (params.length == 0) {
        newStatement = statement
    } else {
        newStatement = statement.format(params)        
    }
    connection.query(newStatement, function(error, results, fields) {
        if(error) throw error;
        callback(results)
    })
}
