const axios = require('./axiosConfig')

test("Test get all people status code", () => {
    axios.get(axios.defaults.herokuPeopleAll)
    .then((response) => {
        expect(response.status).toEqual(200)
    })
});

test("Test get people by invalid date format", () => {
    const date = "20/10/2021"
    axios.get(axios.defaults.herokuPeopleByDate + date)
    .then((response) => {
    
    })
    .catch(error => {
        expect(error.response.status).toEqual(404);
    });
    
});

test("Test get people by valid date format", () => {
    const date = "20-10-2021"
    axios.get(axios.defaults.herokuPeopleByDate + date)
    .then((response) => {
        const data = response.data;
        expect(data.date).toEqual(date);
    });
});
