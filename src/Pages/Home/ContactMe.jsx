import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null, // true | false | null
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please fill in all fields.",
      });
      return;
    }

    // Message length guard (anti-spam)
    if (formData.message.length > 1500) {
        setStatus({
        submitting: false,
        success: false,
        error: "Message is too long. Please keep it under 1500 characters.",
        });
        return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({ submitting: true, success: null, error: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Yahi vo templateParams hai jo template ke variables se match karta hai
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      console.log("EmailJS SUCCESS:", response.status, response.text);

      setStatus({
        submitting: false,
        success: true,
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS FAILED:", err);

      setStatus({
        submitting: false,
        success: false,
        error:
          "Something went wrong while sending your message. Please try again later.",
      });
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--heading">
        <p className="sub--title">Get In Touch</p>
        <h2 className="contact--main--title">Let's Connect</h2>
        <p className="text-lg contact--description">
          I'm always open to discussing new projects, opportunities, and collaborations.
        </p>
      </div>

      <div className="contact--content--wrapper">
        {/* Left Side - Contact Form */}
        <div className="contact--form--wrapper">
          <h3 className="contact--form--title">Get in Touch</h3>

          {/* Status Messages */}
          {status.success === true && (
            <p className="contact--status contact--status--success">
              ✅ Your message has been sent. I will get back to you soon.
            </p>
          )}
          {status.success === false && status.error && (
            <p className="contact--status contact--status--error">
              ⚠️ {status.error}
            </p>
          )}

          <form className="contact--form--container" onSubmit={handleSubmit}>
            <label htmlFor="name" className="contact--label">
              <span className="text-md">Your Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="email" className="contact--label">
              <span className="text-md">Your Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="message" className="contact--label">
              <span className="text-md">Your Message</span>
              <textarea
                className="contact--input text-md"
                id="message"
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <div>
              <button
                type="submit"
                className="btn btn-primary contact--form--btn"
                disabled={status.submitting}
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Connect Links */}
        <div className="contact--connect--wrapper">
          <h3 className="contact--connect--title">Connect with Me</h3>

          <div className="contact--links">
            {/* Email */}
            <a
              href="mailto:girdharsaini.cvt@gmail.com"
              className="contact--link--item"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact--link--icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span className="contact--link--text">girdharsaini.cvt@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/girdhar97/"
              className="contact--link--item"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact--link--icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="contact--link--text">LinkedIn Profile</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Girdhar97"
              className="contact--link--item"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact--link--icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <span className="contact--link--text">GitHub Profile</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/girdharsaini97/"
              className="contact--link--item"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact--link--icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <span className="contact--link--text">Instagram Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
