import { useState } from "react";

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      fullName: "",
      address: "",
      phone: "",
      paymentMethod: "Cash on Delivery",
    });
  };

  return (
    <main>
      <section className="page-header">
        <h1>Checkout</h1>
        <p>Confirm your purchase and complete your order.</p>
      </section>

      <section className="checkout-page">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Whish Money">Whish Money</option>
          </select>

          <button type="submit">Place Order</button>
        </form>
      </section>
    </main>
  );
}

export default Checkout;
