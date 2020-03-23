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
        query("SELECT * from user_info where user_id = $1", [id], callback)
    },
    addUser(userObj, callback) {
        query("INSERT INTO user_info VALUES ($1, $2, $3, $4, $5)", [
            userObj["user_id"],
            userObj["user_personal_name"],
            userObj["age"],
            userObj["user_name"],
            userObj["user_password"]
        ], callback)
    },
    updateUser(userId, userObj, callback) {
        console.log(userId);
        console.log(userObj);
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
        queryString = queryString.substr(0, queryString.length-1);
        queryString += " WHERE user_id = " + userId
        query(queryString, callback)
    },
    removeUser(id, callback) {
        query("DELETE FROM user_info WHERE user_id = $1", [id], callback)
    }
}