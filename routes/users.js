var express = require("express");
var router = express.Router();

const userDAO = require("../db/userDAO");

router.get("/", (req, res) => {
    res.send("user index")
})

router.get("/getById", (req, res) => {
    userDAO.getUser(req.query.id, (err, result) => {
        if(err) throw err;
        res.send(result.rows);
    })
})

router.post("/add", (req, res) => {
    if (req.body["user_id"]) {
        userDAO.addUser(req.body, (err, result) => {
            if(err) throw err;
            res.send("Added user with the ID " + req.body.user_id);
        })
    } else {
        res.send("ERROR: Cannot add a user with a null ID").sendStatus(500)
    }
})

router.post("/update", (req, res) => {
    userDAO.updateUser(req.query.id, req.body, (err, result) => {
        if(err) throw err;
        res.send("Updated user with the ID " + req.query.id);
    })

})

router.delete("/remove", (req, res) => {
    userDAO.removeUser(req.query.id, (err, result) => {
        if(err) throw err;
        res.send(result.rows);
    })
})

module.exports = router