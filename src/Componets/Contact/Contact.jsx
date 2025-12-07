import React, { useRef, useState } from "react";
import "./Contact.css";
import Mail from "../../assets/mail_icon.svg";
import Location from "../../assets/location_icon.svg";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [state, handleSubmit] = useForm("xovpopba");
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    //  Frontend validation
    if (!name || !email || !message) {
      toast.warn("Please fill all fields before submitting! 📝", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    // Note: Since you are using a manual fetch to 'xzznapdg' instead of the useForm 'xovpopba', 
    // I'll keep the logic as you wrote it, but it's redundant if useForm is also used.
    
    // Manual submission logic using fetch
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // Using the Formspree endpoint from your original fetch call
      const response = await fetch("https://formspree.io/f/xzznapdg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thanks for contacting me! 😊", {
          position: "top-right",
          autoClose: 3000,
        });
        form.reset(); // clear inputs
      } else {
        toast.error(result.error || "Something went wrong. Try again! 😟");
      }
    } catch (error) {
      toast.error("Network error. Please try again later. 🌐");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        
        {/* CONTACT LEFT - Enhanced visual card */}
        <div className="contact-left contact-info-card">
          <h1>Let's Connect</h1> {/* Changed 'Let's Talk' to 'Let's Connect' */}
          <p className="contact-intro-text">
            I'm always looking to grow and learn. If you have opportunities,
            ideas, or just want to connect—let’s chat! You can find me here:
          </p>
          
          <div className="contact-details">
            <div className="contact-detail contact-mail-detail">
              <img src={Mail} alt="Mail_Icon" />
              <p>reshmamary.savariyar@gmail.com</p>
            </div>
            <div className="contact-detail contact-location-detail">
              <img src={Location} alt="Location_Icon" />
              <p>Chennai, India</p>
            </div>
          </div>
          
          <p className="contact-closing-text">
            Ready to build something great? Send a message my way! 🚀
          </p>

        </div>

        {/* CONTACT RIGHT - The Form */}
        <form ref={formRef} onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" name="name" placeholder="Enter Your Name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" name="email" placeholder="Enter Your Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            id="message"
            name="message"
            rows="6" /* Increased rows for better visual balance */
            placeholder="Enter Your Message (Opportunities, ideas, or just a chat!)"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            className="contact-submit-button" /* Renamed class */
            disabled={state.submitting || loading}
          >
            {state.submitting || loading ? "Sending..." : "Send Message Now 👋"}
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Contact;