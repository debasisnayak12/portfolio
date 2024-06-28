import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./styles.css";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_47h0ewm";
    const templateId = "template_9qygdbm";
    const publicKey = "CKdocYEVlWh76jSjP";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Debasis Nayak",
      message: message,
    };
  
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("successfull email sent", response);
      toast.success("Email sent SuccessFully!");
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((err) => {
      console.log("Error sending email", err);
      toast.error("Erorr sending email");
    })
  };

  return (
    <div id="contact" className="contact">
      <h1 className="head">Contact</h1>
      <p className="desc">
        Feel free to reach out to me for any questions or opportunities!
      </p>
      <div className="contact-form">
        <h2>Email Me🚀</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your Email"
          />
          <input
            type="text"
            name="user_name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your Name"
          />
          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Message"
            rows="4"
            cols="50"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
