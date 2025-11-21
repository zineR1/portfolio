import React from 'react';
import styles from './Contact.module.css';
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"



function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  }
  if (!input.email) {
    errors.email = "Email is required";
  }
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(input.email.length > 0 && !validEmail.test(input.email)) {
        errors.email = 'Please enter a valid email'
    }

  if (!input.subject) {
    errors.subject = "Subject is required";
  }

  if (!input.company) {
    errors.company = "Company is required";
  }

  if (!input.text) {
    errors.text = "Message is required";
  }

  return errors;
}

const Contact = () => {
  
  // const dispatch = useDispatch();
  const history = useNavigate();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    text: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!Object.keys(errors).length) {
     emailjs.sendForm("service_l9nbfqt", "template_yzjmr1t", 
      e.target, "mu4wBWTcndO5oniOq")
      alert("Message sent successfully!!");
      setInput({
        name: "",
        email: "",
        subject: "",
        company: "",
        text: "",
      });
      history("/");
    } else {
      alert("Please review the form!");
    }
  }

  return (
    <div>
      <div className={styles.main1}>
        <div className={styles.title1}>Contact Me</div>
  
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputs}>
            <input
              type="text"
              value={input.name}
              name="name"
              placeholder="Your name"
              className={styles.input}
              onChange={(e) => handleChange(e)}
              // required
            />
            <div className={styles.errors}>
              {errors.name && <span>{errors.name}</span>}
            </div>
          </div>
          <div className={styles.inputs}>
            <input
              type="text"
              value={input.email}
              name="email"
              placeholder="Your email"
              className={styles.input}
              onChange={(e) => handleChange(e)}
              // required
            />
            <div className={styles.errors}>
              {errors.email && <span>{errors.email}</span>}
            </div>
          </div>

          <div className={styles.inputs}>
            <input
              type="text"
              value={input.company}
              name="company"
              placeholder="Company Name"
              className={styles.input}
              onChange={(e) => handleChange(e)}
              // required
            />
            <div className={styles.errors}>
              {errors.company && <span>{errors.company}</span>}
            </div>
          </div>

          <div className={styles.inputs}>
            <input
              type="text"
              value={input.subject}
              name="subject"
              placeholder="Subject"
              className={styles.input}
              onChange={(e) => handleChange(e)}
              // required
            />
            <div className={styles.errors}>
              {errors.subject && <span>{errors.subject}</span>}
            </div>
          </div>
          <div className={styles.inputs}>
            <textarea
              value={input.text}
              name="text"
              placeholder="Your message"
              className={styles.textarea}
              onChange={(e) => handleChange(e)}
              // required
            />
            <div className={styles.errors}>
              {errors.text && <span>{errors.text}</span>}
            </div>
          </div>
          <div>
            <button type="submit" className={styles.button}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Contact