const axios = require('axios');

const axiosInstance = axios.default.create({
    baseURL: 'https://suchonsite-server.herokuapp.com/',
    herokuPeopleAll: 'https://suchonsite-server.herokuapp.com/people/all',
    herokuPeopleByDate: 'https://suchonsite-server.herokuapp.com/people/by_date/'
});

module.exports = axiosInstance;