import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import Iframe from "react-iframe";

const Contacts = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        return response.status;
      })
      .catch((err) => {
        return err;
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2 className="page_title">Contact Us</h2>
      <hr className="line" />
      <div className="container-fluid px-5 my-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-sm-6 d-none d-sm-block bg-image">
                    <Iframe
                      url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1116.8322664136333!2d-0.09218406839704267!3d51.49231691804362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1673285403851!5m2!1suk!2sua"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                      display="block"
                    />
                  </div>
                  <div className="col-sm-6 p-4">
                    <div className="text-center">
                      <div className="h3 fw-light">Contact Us</div>
                      <p className="mb-4 text-muted">Feel free to contact us</p>
                    </div>

                    <form onSubmit={onSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name="from_name"
                          placeholder="Name"
                          className="form-control"
                          required
                          value={toSend.from_name}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          name="reply_to"
                          className="form-control"
                          placeholder="Email Address"
                          required
                          value={toSend.reply_to}
                          onChange={handleChange}
                        />
                        <label htmlFor="emailAddress">Email Address</label>
                      </div>

                      <div className="form-floating mb-3">
                        <textarea
                          type="text"
                          name="message"
                          className="form-control"
                          placeholder="Message"
                          required
                          value={toSend.message}
                          onChange={handleChange}
                        />
                        <label htmlFor="message">Message</label>
                      </div>

                      <div className="d-grid">
                        <button type="submit" className="btn_cl submit_btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
