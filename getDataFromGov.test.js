const axios = require('./axiosConfig') // require('axios')

// 402, 401, 502, 504
// POST https://suchonsite-server.herokuapp.com/getDataFromGov/{{date}}

beforeAll(() => jest.setTimeout(90 * 1000))

/**
    Test case id: T2
    Should return 401 if the db have this date' data 
*/
test("should return 401 since data already in db", () => {
    const date = "20-10-2021"
    return axios.post(axios.defaults.herokuGetDataFromGov + date)
    .then((response) => {
        expect(response.status).toEqual(401)
    })
})

/**
    Test case id: T3
    Should return 504 if fetch gov server fail
*/
test("should return 504 gov server failed", () => {
    const date = "18-10-2021"
    return axios.post(axios.defaults.herokuGetDataFromGov + date)
    .then((response) => {
        expect(response.status).toEqual(504)
    })
})