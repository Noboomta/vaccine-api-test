const axios = require('./axiosConfig') // require('axios')

/**
    Test case id: T1
    Should return 200 after get all
*/
test("Test get all people status code", () => {
    return axios.get(axios.defaults.herokuPeopleAll)
    .then((response) => {
        expect(response.status).toEqual(200)
    })
});
