import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Contact.scss";
import { makeRequest } from '../../makeRequest';

const Contact = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: ''
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const joinUs = async (e) => {
    e.preventDefault();
    try {
      
      const url =process.env.REACT_APP_API_URL + `newsletters`;
      if (user) {
        // const res = true
        console.log(user)
        const res = await axios.post(url,
          {
            "data": {
              "email": user.email
            }
          }
        );
        //console.log(res)
        if (res) {
          navigate("/");
          toast.success("Thank you for joining in...", {
            hideProgressBar: true,
            theme: "dark",
            position: "bottom-right",
            hideProgressBar: "true",
            autoClose: 1500,
          });
          setUser({ email: '' });
        }
      }
    } catch (error) {
      toast.error('Please enter a correct Email!', {
        theme: "colored",
        position: "bottom-right",
        hideProgressBar: "true",
        autoClose: 1500,
      });
    }
  };



  return (
    <>
      <div className='contact' data-aos="fade-up">
        <div className="wrapper">
          <span>BE IN TOUCH WITH US:</span>
          <div className="mail">
            <form>
              <input type="email" name='email' onChange={handleChange} placeholder='Enter your e-mail...' />
              <button onClick={joinUs}>JOIN US</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact