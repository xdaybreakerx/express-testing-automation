const { app } = require("../src/server.js");
const request = require("supertest");

describe("Root route", () => {
    test("server returns a 'hello world!' message", async () => {
        // make a request to "/" route 
        // wait for response and store it
        const response = await request(app).get("/");

        // check the body of the response for a "Hello world!" string 
        expect(response.body.message).toBe("hello world!");

    });

});