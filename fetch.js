const axios = require('axios');

// get the carpark_data array from response.data
const getCarparkData = (response) => {
    const { items } = response.data;
    return items;

    // TODO: Deconstruct the items object into timestamp and carpark_data
}

//setInterval(() => {
    axios.get('https://api.data.gov.sg/v1/transport/carpark-availability')
        .then(function (response) {
            console.log(getCarparkData(response));
        }) .catch(function (error) {
            console.log(error);
        });
//}, 500);