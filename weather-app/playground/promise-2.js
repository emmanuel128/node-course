const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCI_R3wN76sy72ZatATUzRQbPHbPFUOTXw`,
            json: true
        }, (error, response, body) => {
            if (error) {
                // console.log('Error:', error);
                reject('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                // console.log('Unable to find that address.');
                reject('Unable to find that address.');
            }
            else if (body.status === 'OK') {
                resolve(
                    {
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    }
                );
            }
        });
    });
};

geocodeAddress('0000000')
    .then((location) => {
        console.log(JSON.stringify(location, undefined, 2));
    }, (errorMessage) => {
        console.log(errorMessage);
    }).catch(error => {
        console.log(error)
    })