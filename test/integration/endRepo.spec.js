const request = require("supertest");
const app = require("../../src/app");

describe("GetRepo", () => {
  it("should be able to get repo", async () => {
    jest.setTimeout(10000);
    const repo = await request(app).get(`/api/repos`);

    expect(repo.body).toHaveLength(5);
  });
});
