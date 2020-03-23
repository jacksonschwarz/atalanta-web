const query = require("./dbConnection");

//CREATE TABLE public.user_info
// (
//     user_id integer NOT NULL,
//     user_personal_name character varying(20) COLLATE pg_catalog."default",
//     age integer,
//     user_name character varying(100) COLLATE pg_catalog."default",
//     user_password character varying(100) COLLATE pg_catalog."default",
//     CONSTRAINT user_info_user_id_key UNIQUE (user_id)
// )

module.exports = {
    getUser(id, callback) {
        query("SELECT * from user_info where userID = {0}", [id], callback)
    },
    addUser(userObj, callback) {
        query("INSERT INTO user_info VALUES ({0}, '{1}', '{2}', '{3}', '{4}', '{5}')", [
            userObj["user_id"],
            userObj["user_personal_name"],
            userObj["age"],
            userObj["user_name"],
            userObj["user_password"],
            userObj["user_email"]
        ], callback)
    },
    updateUser(userId, userObj, callback) {
        let queryString = "UPDATE user_info SET"
        if (userObj["user_personal_name"]) {
            queryString += ` user_personal_name = '${userObj["user_personal_name"]}',`
        }
        if (userObj["age"]) {
            queryString += ` age = '${userObj["age"]}',`
        }
        if (userObj["user_name"]) {
            queryString += ` user_name = '${userObj["user_name"]}',`
        }
        if (userObj["user_password"]) {
            queryString += ` user_password = '${userObj["user_password"]}',`
        }
        if (userObj["user_email"]) {
            queryString += ` user_email = '${userObj["user_email"]}',`
        }

        queryString = queryString.slice(0, queryString.length-1);
        queryString += " WHERE userID = " + userId
        console.log("FROM DAO")
        console.log(queryString)
        query(queryString, [], callback)
    },
    removeUser(id, callback) {
        query("DELETE FROM user_info WHERE userID = {0}", [id], callback)
    }
}