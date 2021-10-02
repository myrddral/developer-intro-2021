import { useState } from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");
  const [isMessageValid, setIsMessageValid] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    validateName(name);
    validateEmail(email);
    validateMessage(message);

    if (
      name &&
      email &&
      message &&
      !nameError &&
      !emailError &&
      !messageError
    ) {
      setIsLoading("is-loading");
      setTimeout(() => {
        const dataToSubmit = { name: name, email: email, message: message };
        const templateId = "template_tghq0ue";
        const serviceId = "service_txwthhe";

        init("user_PChodvnniIflBDsYItSve");
        emailjs
          .send(
            serviceId,
            templateId,
            dataToSubmit,
            "user_PChodvnniIflBDsYItSve"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );

        setIsLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        setIsMessageSent(true);
        setTimeout(() => {
          setIsMessageSent(false);
        }, 3000);
      }, 1000);
    }
  };

  function validateName() {
    if (name) {
      setNameError("");
      setIsNameValid("");
      return true;
    }
    setNameError("Please enter your name!");
    setIsNameValid("is-danger");
  }

  function validateEmail() {
    if (!email) {
      setEmailError("Please enter your email address!");
      setIsEmailValid("is-danger");
      return true;
    } else if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("");
      setIsEmailValid("");
    } else {
      setEmailError("You have entered an invalid email address!");
      setIsEmailValid("is-danger");
    }
  }

  function validateMessage() {
    if (message) {
      setMessageError("");
      setIsMessageValid("");
      return true;
    }
    setMessageError("Please enter your message!");
    setIsMessageValid("is-danger");
  }

  return (
    <>
      <div className="field">
        <label className="label"></label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={`input ${isNameValid}`}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setNameError("");
              setIsNameValid("");
            }}
            onBlur={() => validateName()}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          {nameError && (
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          )}
        </div>
        <p className="help is-danger">{nameError}</p>
      </div>

      <div className="field">
        <label className="label"></label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={`input ${isEmailValid}`}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setEmailError("");
              setIsEmailValid("");
            }}
            onBlur={() => validateEmail()}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          {emailError && (
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          )}
        </div>
        <p className="help is-danger">{emailError}</p>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className={`textarea ${isMessageValid}`}
            placeholder="Enter your message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setMessageError("");
              setIsMessageValid("");
            }}
            onBlur={() => validateMessage()}
          ></textarea>
        </div>
        <p className="help is-danger">{messageError}</p>
      </div>

      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          {isMessageSent ? (
            <button className="button is-success">
              Your message has been sent{" "}
              <span>
                <i className="fas fa-check"></i>
              </span>
            </button>
          ) : (
            <button
              onClick={onSubmit}
              className={`button is-info ${isLoading}`}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;
