const query = require("./dbConnection");

module.exports = {
    /**
     * Gets the hazard by the external identifier
     * @param {*} id 
     * @param {*} callback 
     */
    getHazardById(id, callback) {

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

    },
    /**
     * Gets all of the hazards of the specific type within the bounds. 
     * @param {*} latBounds 
     * @param {*} lonBounds 
     * @param {*} type 
     */
    getHazardsByType(latBounds, lonBounds, type, callback) {
        
    },
    /**
     * Gets the hazards reported since the specified date. 
     * @param {*} latBounds 
     * @param {*} lonBounds 
     * @param {*} date 
     * @param {*} callback 
     */
    getHazardByTimeReported(latBounds, lonBounds, date, callback) {

    }
}