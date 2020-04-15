var express = require("express");
var router = express.Router();

const hazardDAO = require("../db/hazardDAO")
router.get("/", (req, res) => {
    res.send("Hazards index")
})
router.get("/getById", (req, res) => {
    console.log("getting a hazard with the id: " + req.params.id);
    let id = req.query.id;
    hazardDAO.getHazardById(id, (result) => {
        res.send(result);
    })
})

router.get("/getByLatLon", (req, res) => {
    let lat = req.query.lat;
    let lon = req.query.lon;
    res.send("got a hazard from lat " + lat + " and lon " + lon);
})

router.get("/getWithinArea", (req, res) => {
    let latBounds = req.body.latBounds;
    let lonBounds = req.body.lonBounds;
    hazardDAO.getHazardsWithinRange(latBounds, lonBounds, (result) => {
        res.send(result)
    })
})

router.get("/getSinceTimestamp", (req, res) => {
    let timestamp = parseInt(req.query.timestamp);
    hazardDAO.getHazardsByTimeReported(timestamp, (result) => {
        res.send(result);
    })
})
router.get("/getByCategory", (req, res) => {
    let category = req.query.category;
    hazardDAO.getHazardsByCategory(category, (result) => {
        res.send(result)
    })

})
router.post("/add", (req, res) => {
    let hazard = req.body
    hazardDAO.addHazard(hazard, (result) => {
        res.send("Successfully added hazard");
    })
})
router.post("/update", (req, res) => {
    res.send("update a hazard")
})
router.delete("/remove", (req, res) => {
    let hazardId = req.query.hazardId;
    hazardDAO.removeHazard(hazardId, (result) => {
        res.send("Removed hazard with ID " + hazardId);
    })
})
module.exports = router