const request = require("supertest")
const {app} = require("../../server")




describe("App Routes", () => {
  it("should return Hello World", async () => {
    const res = await request(app).get("/").expect(200)
    expect(res.text).toBe("Hello World!")
  })
})