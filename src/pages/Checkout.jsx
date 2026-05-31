function Checkout() {
  return (
    <main>
      <section className="page-header">
        <h1>Checkout</h1>
        <p>Confirm your purchase and complete your order.</p>
      </section>

      <section className="checkout-page">
        <form className="checkout-form">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Address" />
          <input type="tel" placeholder="Phone Number" />

          <select>
            <option>Cash on Delivery</option>
            <option>Credit Card</option>
            <option>Whish Money</option>
          </select>

          <button type="submit">Place Order</button>
        </form>
      </section>
    </main>
  );
}

export default Checkout;