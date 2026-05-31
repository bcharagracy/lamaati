import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main>
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </section>

      <section className="contact-page">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: lamaati@gmail.com</p>
          <p>Phone: 70 123 456</p>
          <p>Location: Beirut, Lebanon</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" onclick={() => alert("Message sent!")}>
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
