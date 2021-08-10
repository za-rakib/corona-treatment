import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Button from "../../UI/Button/Button";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_ewkkljw",
        e.target,
        "user_Zi8QivQLiIpko9I0WdFMS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section id="contact"className="contact contactSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="mt-5 text-center text-white">
              <h1>Contact With Us</h1>
            </div>
            <form
              onSubmit={sendEmail}
              className="p-5 form offset-md-2 align-items-center text-center"
              method="post"
              data-form-title="CONTACT US"
            >
              <input type="hidden" data-form-email="true"></input>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required=""
                  placeholder="Name"
                  data-form-field="Name"
                ></input>
              </div>
              <br />
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required=""
                  placeholder="Email Address"
                  data-form-field="Email"
                ></input>
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  data-form-field="Subject"
                ></input>
              </div>
              <br />
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  rows="7"
                  data-form-field="Message"
                ></textarea>
              </div>
              <br />
              <div>
                <Button
                  type="submit"
                  value="send"
                  className="btn btn-lg btn-danger"
                >
                  SUBMIT
                </Button>
                {/* <button type="submit" value="send" className="btn btn-lg btn-danger">CONTACT US</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
