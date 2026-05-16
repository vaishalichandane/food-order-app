import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("https://food-order-backend-e4yh.onrender.com/menu")
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (item) => {
    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      ...item,
      quantity: 1,
    });

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Item Added To Cart");
  };

  return (
    <div className="container">
      <h1 className="menu-title">
        Delicious Food Menu
      </h1>

      <div className="menu-container">
        {menu.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
            />

            <div className="card-content">
              <h2>{item.name}</h2>

              <p>{item.description}</p>

              <p>
                <strong>
                  ₹{item.price}
                </strong>
              </p>

              <button
                onClick={() =>
                  addToCart(item)
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;