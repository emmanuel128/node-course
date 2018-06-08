const request = require('request');

geocodeAddress = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCI_R3wN76sy72ZatATUzRQbPHbPFUOTXw`,
        json: true
    }, (error, response, body) => {
        if (error) {
            // console.log('Error:', error);
            callback('Unable to connect to Google servers.')
        } else if (body.status === 'ZERO_RESULTS') {
            // console.log('Unable to find that address.');
            callback('Unable to find that address.');
        }
        else if (body.status === 'OK') {
            // console.log(JSON.stringify(body, null, 2))
            // console.log(`Address: ${body.results[0].formatted_address}`);
            // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
            callback(null, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    })
}

module.exports = {
    geocodeAddress
}

// 2301a632f6630204099e6d811f0b7361