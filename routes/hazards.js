var express = require("express");
var router = express.Router();

const hazardDAO = require("../db/hazardDAO")
router.get("/", (req, res) => {
    res.send("Hazards index")
})
router.get("/getById", (req, res) => {
    console.log("getting a hazard with the id: " + req.params.id);
    let id = req.query.id;
    hazardDAO.getHazardById(id, (err, result) => {
        if (err) throw err;
        console.log(result.rows);
        res.send(result.rows);
    })
})

router.get("/getByLatLon", (req, res) => {
    let lat = req.query.lat;
    let lon = req.query.lon;
    console.log("Getting a hazard with the latitude " + lat + " and longitude " + lon);
    res.send("got a hazard from lat " + lat + " and lon " + lon);
})

router.get("/getWithinRadius", (req, res) => {
    let centerLat = req.query.centerLat;
    let centerLon = req.query.centerLon;
    let radius = req.query.radius;
    console.log("getting all hazards within " + radius + " units of " + lat + ", " + lon);
})

router.post("/add", (req, res) => {
    res.send("add a hazard")
})
router.post("/update", (req, res) => {
    res.send("update a hazard")
})
router.delete("/remove", (req, res) => {
    res.send("delete a hazard")
})
module.exports = router