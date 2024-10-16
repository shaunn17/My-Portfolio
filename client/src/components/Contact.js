import React, { useState } from 'react';
import '../styles.css';
import '../css/contact.css';


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    if (response.ok) {
      alert('Message sent!');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <section className="contact" id="contact">
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);
};

export default Contact;

    // <section className="contact py-5 bg-dark text-white" id="contact">
    //   <div className="container">
    //     <h2 className="text-center mb-4">Contact Me</h2>
    //     <form className="mx-auto" style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
    //       <div className="mb-3">
    //         <input type="text" className="form-control" placeholder="Your Name" value={form.name} onChange={handleChange} required />
    //       </div>
    //       <div className="mb-3">
    //         <input type="email" className="form-control" placeholder="Your Email" value={form.email} onChange={handleChange} required />
    //       </div>
    //       <div className="mb-3">
    //         <textarea className="form-control" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
    //       </div>
    //       <button type="submit" className="btn btn-success btn-lg w-100">Send Message</button>
    //     </form>
    //   </div>
    // </section>



