const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let menu = [
  {
    id: 1,
    name: "Pizza",
    description: "Cheesy pizza",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },
  {
    id: 2,
    name: "Burger",
    description: "Chicken burger",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  }
];

let orders = [];

app.get("/menu", (req, res) => {
  res.json(menu);
});

app.post("/orders", (req, res) => {
  const order = {
    id: Date.now(),
    ...req.body,
    status: "Order Received"
  };

  orders.push(order);

  setTimeout(() => {
    order.status = "Preparing";
  }, 5000);

  setTimeout(() => {
    order.status = "Out for Delivery";
  }, 10000);

  setTimeout(() => {
    order.status = "Delivered";
  }, 15000);

  res.status(201).json(order);
});

app.get("/orders/:id", (req, res) => {
  const order = orders.find(
    (o) => o.id == req.params.id
  );

  if (!order) {
    return res.status(404).json({
      message: "Order not found"
    });
  }

  res.json(order);
});

if (process.env.NODE_ENV !== "test") {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}

module.exports = app;