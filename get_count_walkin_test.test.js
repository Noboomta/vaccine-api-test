const axios = require('./axiosConfig')

beforeAll(() => jest.setTimeout(90 * 1000))

/**
    Test case id: T11
*/
test("should return status 200 and right structure", async () => {
    const date = "11-11-2021"
    return await axios.get(axios.defaults.herokuCountWalkin + date)
    .then((response) => {
        expect(response.status).toEqual(200)
        const walkin = response.data;
        expect(walkin.total_walkin).toEqual(expect.any(Number));
    })
})