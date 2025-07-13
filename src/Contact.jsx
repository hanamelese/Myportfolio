import React, { useState } from "react";
import emailjs from "emailjs-com";
import {} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_j42ta8a",
        "template_iisnfyf",
        formData,
        "WJ6ELODA4Zxf8c6jo"
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed to send email:", error.text);
        }
      );
  };

  return (
    <div style={{ padding: "60px 10%", fontFamily: "Poppins, sans-serif" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        Contact & Feedback
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "70px" }}>
        {/* === Feedback Form === */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              background: "#121a2f",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 4px 10px rgba(30,0,0,10),0 4px 10px rgba(0,0,10,1)",
            }}
          >
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                background: "lightGrey",
              }}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                background: "lightGrey",
              }}
            />

            <label>Message:</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                background: "lightGrey",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                padding: "10px",

                border: "none",
                marginTop: "25px",
                background: "#A4CCD9",
                borderRadius: "5px",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <p style={{ color: "green", marginTop: "10px" }}>
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </div>

        {/* === Timeline Animation === */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h3>Full Name</h3>
          <p>Hana Melese</p>

          <h3>Phone Number</h3>
          <p>+251-946446656</p>

          <h3>Email</h3>
          <p>hanamelese95@gmail.com</p>

          <h3>Telegram Username</h3>
          <p>@hanitta111996</p>

          <div
            className="icons"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "100px",
            }}
          >
            <a href="https://github.com/hanamelese">
              <i className="fab fa-github"></i>
            </a>

            <a href="https://t.me/hanitta111996">
              <i className="fab fa-telegram"></i>
            </a>

            <a href="https://www.linkedin.com/in/hana-melese-103520339/">
              <i className="fab fa-linkedin"></i>
            </a>

            {/* <a href="https://www.instagram.com/ktab_pictures?igsh=cXJtc3pwZzU5ZXk=">
            <i className="fas fa-camera"></i>
          </a> */}

            {/* <a href="https://www.youtube.com/@GeorgeNegative">
            <i className="fab fa-youtube"></i>
          </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
