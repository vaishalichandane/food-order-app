import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OrderStatus() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = () => {
      axios
        .get(
          `http://localhost:5000/orders/${id}`
        )
        .then((res) => {
          setOrder(res.data);
        });
    };

    fetchOrder();

    const interval = setInterval(() => {
      fetchOrder();
    }, 3000);

    return () => clearInterval(interval);
  }, [id]);

  return (
    <div className="container">
      <div className="status-box">
        <h1>Track Your Order</h1>

        {order ? (
          <>
            <h2>Status</h2>

            <h1>{order.status}</h1>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default OrderStatus;