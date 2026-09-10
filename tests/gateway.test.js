const request = require("supertest");

const app = require("../src/app");

describe("API Gateway", () => {

  test("Health endpoint", async () => {

    const response =
      await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body.service)
      .toBe("api-gateway");

  });

});
