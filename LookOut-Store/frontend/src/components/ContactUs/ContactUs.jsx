import React, { useState } from 'react';
import './ContactUs.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContactUs() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Please enter your name';
    }

    if (!formData.email) {
      errors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message) {
      errors.message = 'Please enter a message';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleContact();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContact = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/feedbacks`;
      if (formData) {
        // console.log(formData.name)
        // console.log(formData.email)
        // console.log(formData.message)
        const res = await axios.post(url,
          {
            "data" :{
              "name": formData.name,
              "email": formData.email,
              "message": formData.message
            }
          }
        );
        // console.log(res)
        if (res) {
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          navigate("/");
          toast.success("We'll reach you shortly", {
            hideProgressBar: true,
            theme: "dark",
            position: "bottom-right",
            hideProgressBar: "true",
            autoClose: 1500,
          });
        }
      }
    } catch (error) {
      toast.error(error.message, {
        theme: "colored",
        position: "bottom-right",
        hideProgressBar: "true",
        autoClose: 1500,
      });
    }
  };



  return (
    <div className="contact-us" data-aos="zoom-out">
      <h1>Want to leave a message?</h1>
      {/* <div className="video-background">
        <video autoPlay muted loop>
          <source src={video1} type="video/mp4" />
        </video>
      </div> */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className={`form-group ${formErrors.name && 'has-error'}`}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className={`form-group ${formErrors.email && 'has-error'}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className={`form-group ${formErrors.message && 'has-error'}`}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" value={formData.message} onChange={handleChange}></textarea>
          {formErrors.message && <span className="error">{formErrors.message}</span>} 
        </div>
        <button type="submit">Send</button>
      <span className='end_note'>We'll reach you shortly</span>
      </form>
    </div>
  );
}

export default ContactUs;
