import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const placeOrder = async () => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    if (
      !form.name ||
      !form.address ||
      !form.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "https://food-order-backend-e4yh.onrender.com/orders",
        {
          customer: form,
          items: cart
        }
      );

      localStorage.removeItem("cart");

      navigate(`/order/${res.data.id}`);
    } catch (error) {
      console.log(error);
      alert("Order Failed");
    }
  };

  return (
    <div className="container">
      <div className="checkout-box">
        <h1>Checkout</h1>

        <br />

        <input
          type="text"
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Enter Address"
          value={form.address}
          onChange={(e) =>
            setForm({
              ...form,
              address: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value
            })
          }
        />

        <button onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;