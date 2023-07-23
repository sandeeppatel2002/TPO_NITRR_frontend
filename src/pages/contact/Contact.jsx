import React from "react";
import "./contact.css";
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // You can use libraries like axios or fetch to make an API call here
  };

  return (
    <section>
      <div className="section-background">
        <div className="container">
          <div className="row" style={{ marginBottom: "5px" }}>
            <div className="col-md-6">
              <h3 className="text-uppercase">Get In Touch</h3>

              <div className="m-t-30">
                <form
                  id="widget-contact-form"
                  onSubmit={handleSubmit}
                  role="form"
                  noValidate
                >
                  <div className="row">
                    <div className="form-group col-sm-6">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        aria-required="true"
                        name="widget-contact-form-name"
                        className="form-control required name"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        aria-required="true"
                        name="widget-contact-form-email"
                        className="form-control required email"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="subject">
                        QUERY REGARDING
                        <small style={{ color: "grey" }}>
                          (Placement, Internship, or both) Select from the menu
                        </small>
                      </label>
                      <select name="event" className="form-control">
                        <option value="Placement">Campus Recruitment</option>
                        <option value="Internship">Internship</option>
                        <option value="Both">
                          Campus Recruitment &amp; Internship
                        </option>
                      </select>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="upper" htmlFor="phone">
                          Contact Number
                        </label>
                        <input
                          className="form-control required"
                          name="phone"
                          placeholder="Enter phone"
                          id="phone"
                          aria-required="true"
                          type="number"
                          max="9999999999"
                          minLength="10"
                          pattern="[0-9]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <label htmlFor="subject">Your Subject</label>
                      <input
                        type="text"
                        name="widget-contact-form-subject"
                        className="form-control required"
                        placeholder="Subject : - CAMPUS RECRUITMENT / INTERNSHIP"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      type="text"
                      name="widget-contact-form-message"
                      rows="5"
                      className="form-control required"
                      placeholder="Your Name, Contact No. &amp; Suitable time to reach you"
                      aria-required="true"
                    ></textarea>
                  </div>
                  <input
                    type="text"
                    className="hidden"
                    id="widget-contact-form-antispam"
                    name="widget-contact-form-antispam"
                    value=""
                  />
                  <button
                    className="btn btn-primary"
                    type="submit"
                    id="form-submit"
                  >
                    <i className="fa fa-paper-plane"></i>&nbsp;Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
