import { Link } from "react-router-dom";

function Cart() {
  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div className="container">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              className="card"
              key={index}
            >
              <div className="card-content">
                <h2>{item.name}</h2>

                <p>₹{item.price}</p>

                <p>
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
          ))}

          <br />

          <Link to="/checkout">
            <button>
              Go To Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;