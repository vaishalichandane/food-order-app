const request = require("supertest");
const app = require("./server");

describe("Food Order API", () => {

  test("GET /menu should return menu items", async () => {

    const response = await request(app)
      .get("/menu");

    expect(response.statusCode).toBe(200);

    expect(response.body.length).toBeGreaterThan(0);

  });

  test("POST /orders should create order", async () => {

    const response = await request(app)
      .post("/orders")
      .send({
        customer: {
          name: "Vaishali",
          address: "Pune",
          phone: "9876543210"
        },
        items: [
          {
            name: "Pizza",
            price: 299
          }
        ]
      });

    expect(response.statusCode).toBe(201);

    expect(response.body.status)
      .toBe("Order Received");

  });

});