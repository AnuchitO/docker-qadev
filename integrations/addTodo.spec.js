const request = require("./request")
const env = require("../src/env")

describe("Integration Test", () => {
    test('it stores item correctly', async () => {
        const host = env.apiBaseURL
        const port = 3000
        const path = '/items'
        const method = 'POST'
        const payload = { name: "What's up!! anuchito" }

        const res = await request(host, port, path, method, payload)

        expect(res.body).toHaveProperty("completed")
        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("name")
    });
})
