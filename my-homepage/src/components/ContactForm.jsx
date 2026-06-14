import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="form-container">
        <h2>Send Us A Message</h2>

        <form>
          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="Company Name" />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
          ></textarea>

          <button type="submit">
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;