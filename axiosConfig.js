const axios = require('axios');

const axiosInstance = axios.default.create({
    baseURL: 'https://suchonsite-server.herokuapp.com/',
    herokuPeopleAll: 'https://suchonsite-server.herokuapp.com/people/all',
    herokuPeopleByDate: 'https://suchonsite-server.herokuapp.com/people/by_date/',
    herokuGetDataFromGov: 'https://suchonsite-server.herokuapp.com/getDataFromGov/',
    herokuCountWalkin: 'https://suchonsite-server.herokuapp.com/people/count/walkin/',
    herokuCountTotal: 'https://suchonsite-server.herokuapp.com/people/count/total/',
});

module.exports = axiosInstance;