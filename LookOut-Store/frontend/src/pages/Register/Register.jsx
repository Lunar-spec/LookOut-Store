import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import "./Register.scss";

const initialUser = { password: "", email: "", name: "", username: "" };

const Register = () => {
  const [user, setUser] = useState(initialUser);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setUser((currentUser) => ({
      ...currentUser,
      [target.name]: target.value,
    }));
  };

  const singUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.email && user.name && user.username && user.password) {
        const res = await axios.post(url, user);
        //console.log(res)
        if (res) {
          setUser(initialUser);
          navigate("/login");
          toast.success("Registered successfully", {
            hideProgressBar: true,
            theme: "dark",
            position: "bottom-right",
            autoClose: 1500,
          });
        }
      }
    } catch (error) {
      toast.error('Something went wrong!', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
    }
  };

  return (
    <div className="register" data-aos="zoom-out">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder={"Username"}
              value={user.username}
              onChange={handleChange}
              name="username"
            />
            <input
              type="text"
              placeholder={"Name"}
              value={user.name}
              onChange={handleChange}
              name="name"
            />
            <input
              type="email"
              placeholder={"Email"}
              value={user.email}
              onChange={handleChange}
              name="email"
            />
            <input
              type="password"
              placeholder={"Password"}
              value={user.password}
              onChange={handleChange}
              name="password"
            />
            <Link>
              <button onClick={singUp}>Register</button>
            </Link>
          </form>
        </div>

        <div className="right">
          <h1>LookOut Store.</h1>
          <p>
            Welcome to our fashion website! Register now to access exclusive
            styles and personalized recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
