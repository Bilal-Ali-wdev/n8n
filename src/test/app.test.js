import request from "supertest"
import { app } from "../../server"




describe("App Routes", () => {
  it("should return Hello World", async () => {
    const res = await request(app).get("/").expect(200)
    expect(res.text).toBe("Hello World!")
  })
})