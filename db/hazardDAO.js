const query = require("./dbConnection");

module.exports = {
    /**
     * Gets the hazard by the external identifier
     * @param {*} id 
     * @param {*} callback 
     */
    getHazardById(id, callback) {
        query("select * from hazard_info where hazard_id = {0}", [id], callback)
    },
    /**
     * Gets a hazard based off of the latitude and longitude. 
     * @param {*} lat 
     * @param {*} lon 
     */
    getHazardByLatLon(lat, lon, callback) {
    
    },
    /**
     * Gets all of the hazards within the range ((latBounds[0], lonBounds[0]) , (latBounds[1, lonBounds[1]))
     * @param {*} latBounds a list of two elements, the top left corner's latitude and the bottom right corner's latitude.
     * @param {*} lonBounds a list of two elements, the top left corner's longitude and the bottom right corner's longitude.
     */
    getHazardsWithinRange(latBounds, lonBounds, callback) {
        query("select * from hazard_info where (latitude > {0} and latitude < {1}) and (longitude > {2} and longitude < {3})",
        [latBounds[0], 
        latBounds[1], 
        lonBounds[0], 
        lonBounds[1]], 
        callback)
    },
    getHazardsByCategory(category, callback) {
        query("select * from hazard_info where category = '{0}'", [category], callback)
    },
    /**
     * Gets the hazards reported since the specified date. 
     * @param {*} date in milliseconds
     * @param {*} callback 
     */
    getHazardsByTimeReported(date, callback) {
        //example timestamp: 2020-04-01T23:35:20.000Z
        let rawDate = new Date(date);
        let year = rawDate.getFullYear().toString()
        let month = (rawDate.getMonth() + 1).toString();
        let day = (rawDate.getDate()).toString();
        let hours = rawDate.getHours().toString();
        let minutes = rawDate.getMinutes().toString();
        let seconds = rawDate.getSeconds().toString();
        
        let compareDate = (year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds) 
        query("select * from hazard_info where time_stamp >= '{0}'", [compareDate], callback);
    },
    /**
     * Adds a new hazard according to the specification
     */
    addHazard(hazardDef, callback) {
        let hazardId = Math.round(Math.random() * 1000000)
        query("INSERT INTO hazard_info VALUES ({0}, {1}, now(), '{2}', {3}, {4}, '{5}', '{6}')",
            [
                hazardId,
                hazardDef["userId"],
                hazardDef["category"],
                hazardDef["latitude"],
                hazardDef["longitude"],
                hazardDef["label"],
                hazardDef["description"]
            ], callback)
    },
    removeHazard(hazardId, callback) {
        console.log(hazardId)
        query("DELETE FROM hazard_info WHERE hazard_id = {0}", [hazardId], callback);
    }
}