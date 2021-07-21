const request = require("./request")
const env = require("../src/env")

describe("Integration Test", () => {
    test('it stores item correctly', async () => {
        const path = '/items'
        const method = 'POST'
        const payload = { name: "What's up!! anuchito" }

        const res = await request(env.API_BASE_URL, env.API_PORT, path, method, payload)

        expect(res.body).toHaveProperty("completed")
        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("name")
    });
})
