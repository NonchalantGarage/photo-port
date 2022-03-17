import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }

  function handleChange(event) {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        if (!event.target.value.length) {
          setErrorMessage(`${event.target.name} is required`);
        } else {
          setErrorMessage("");
        }

        if (!errorMessage) {
          setFormState({
            ...formState,
            [event.target.name]: event.target.value,
          });
        }
      }
    }
    console.log("errorMessage", errorMessage);
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-from" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={formState.name}
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={formState.email}
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            type="message"
            rows="5"
            defaultValue={formState.message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid= "form" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
