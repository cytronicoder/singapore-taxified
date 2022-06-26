const axios = require('axios');
const { createFolder, createFile, editFile } = require('./file.js');

createFolder('data');
createFile('carpark-availability', 'data');

axios.get('https://api.data.gov.sg/v1/transport/carpark-availability')
    .then(function (response) {
        editFile('carpark-availability', 'data', response.data.items);
    }) .catch(function (error) {
        console.log(error);
    });