const axios = require('./axiosConfig') // require('axios')

/**
    Test case id: T4
    Should return 404 if input invalid form.
*/
test("Test get people by invalid date format", async () => {
    const date = "11/11/2021"
    return await axios.get(axios.defaults.herokuPeopleByDate + date)
    .then((response) => {
    
    })
    .catch(error => {
        expect(error.response.status).toEqual(404);
    });
    
});

/**
    Test case id: T5
    Should found date in data if requestthe correct date form.
*/
test("Test get people by valid date format and data existed", async () => {
    const date = "11-11-2021"
    return await axios.get(axios.defaults.herokuPeopleByDate + date)
    .then((response) => {
        expect(response.data.date).toEqual(date);
    });
});

/**
    Test case id: T6
    Should return 202 if did not contain date in endpoint.
*/
test("Test get people by date with no date param should return 202", async () => {
    return await axios.get(axios.defaults.herokuPeopleByDate)
    .then((response) => {
        expect(response.status).toEqual(202)
    })
})

/**
    Test case id: T7
    GET people/by_date Test (date valid)
*/
describe("get people by date (no date in db)", () => {
    /**
        Should return correct date in response
    */
    test("Test get people by valid date format but data not existed [response date should equal to date]", async () => {
        const date = "11-11-2021"
        return await axios.get(axios.defaults.herokuPeopleByDate + date)
        .then((response) => {
            expect(response.data.date).toEqual(date);
        });
    });
    
    /**
        Should return [] in data.people when db not contain this data
    */
    test("Test get people by valid date format but data not existed [respnse people should be []]", async () => {
        const date = "11-11-2023"
        return await axios.get(axios.defaults.herokuPeopleByDate + date)
        .then((response) => {
            expect(response.data.people).toEqual([]);
        });
    });
})

/**
    Test case id: T10
*/
describe("Test response structure" , () => {
    /**
     * when that date have values stored in database
     */
    test("Test GET all people structure", async () => {
        return await axios.get(axios.defaults.endpointherokuPeopleAll)
        .then((res) => {
            expect(res).toEqual(expect.any(Object))
        })
    });

    /**
     * Should have data structure like this
     */
    test("Test GET people by date structure", async () => {
        const date = "11-11-2021"
        return await axios.get(axios.defaults.herokuPeopleByDate + date)
        .then((response) => {
            const data = response.data;
            expect(data._id).toEqual(expect.any(String))
            expect(data.date).toEqual(expect.any(String))
            expect(data.people).toEqual(expect.any(Object))
        })
    });

    /**
     * Should have data structure like this 
     * (this test would be false since we create the database in that way)
     */
    test("Test GET people by date structure (no value)", async () => {
        const date = "20-10-2023"
        return await axios.get(axios.defaults.herokuPeopleByDate + date)
        .then((response) => {
            const data = response.data;
            expect(data._id).toEqual(expect.any(String))
            expect(data.date).toEqual(expect.any(String))
            expect(data.people).toEqual(expect.any(Object))
        })
    });

    /**
     * Should have data structure like this
     */
    test("Test GET a person in people by date structure", async () => {
        const date = "11-11-2021";
        return await axios.get(axios.defaults.herokuPeopleByDate + date)
        .then((response) => {
            const person = response.data.people[0];
            expect(person.reservation_id).toEqual(expect.any(Number));
            expect(person.register_timestamp).toEqual(expect.any(String));
            expect(person.name).toEqual(expect.any(String));
            expect(person.surname).toEqual(expect.any(String));
            expect(person.birth_date).toEqual(expect.any(String));
            expect(person.citizen_id).toEqual(expect.any(String));
            expect(person.occupation).toEqual(expect.any(String));
            expect(person.address).toEqual(expect.any(String));
        });
    });

    /**
     * Should return "already have data in this date" string
     */
    test("Test POST response message when post duplicate people to database", async () => {
        const date = "11-11-2021";
        return await axios.post(axios.defaults.herokuGetDataFromGov + date)
        .catch(res => {
            const data = res.response.data;
            expect(data.msg).toEqual("already have data in this date.");
        });
    });
});