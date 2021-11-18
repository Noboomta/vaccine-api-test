const axios = require('./axiosConfig')

beforeAll(() => jest.setTimeout(90 * 1000))

/**
    Test case id: T12
    // {"count":3,"waiting":0,"vaccinated":3,"queue":{"9":3}}
*/
test("should return status 200 and right structure", async () => {
    const date = "20-10-2021"
    return await axios.get(axios.defaults.herokuCountTotal + date)
    .then((response) => {
        expect(response.status).toEqual(200)
        const data = response.data;
        expect(data.count).toEqual(expect.any(Number));
        expect(data.waiting).toEqual(expect.any(Number));
        expect(data.vaccinated).toEqual(expect.any(Number));
        expect(data.queue).toEqual(expect.any(Object));
    })
})