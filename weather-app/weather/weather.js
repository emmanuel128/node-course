const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/2301a632f6630204099e6d811f0b7361/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io servers.')
        } else if (!error && response.statusCode !== 200) {
            callback('Unable to find the temperature.');
        }
        else if (!error && response.statusCode === 200) {
            callback(null, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
}

module.exports = {
    getWeather
}