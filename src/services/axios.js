const axios = require("axios");

/*
const brawlStarsApi = () =>{
    return axios.create({
        baseURL: "https://api.brawlstars.com/v1/",
        headers: {
            Authorization: `Bearer ${process.env.brawlstars_token}`
        }
    });
}
*/

function brawlStarsApi() {
    return axios.create({
        baseURL: "https://api.brawlstars.com/v1/",
        headers: {
            Authorization: `Bearer ${process.env.brawlstars_token}`
        }
    });
}

module.exports = brawlStarsApi;

/*
exports.brawlStarsApi = function() {
    return "teste";
};
*/