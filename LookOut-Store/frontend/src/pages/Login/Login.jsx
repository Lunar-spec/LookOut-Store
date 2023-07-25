    import React, { useState } from "react";
    import { Link, useNavigate } from "react-router-dom";
    import { toast, Flip } from "react-toastify";
    import "./Login.scss";
    import axios from "axios";
    import { storeUser } from "../../components/helpers";
    import { userData } from '../../components/helpers';

    const initialUser = { password: "", identifier: "" };

    const Login = () => {
        const { name } = userData();

        const [user, setUser] = useState(initialUser);
        const navigate = useNavigate();
        const handleChange = ({ target }) => {
            setUser((currentUser) => ({
                ...currentUser,
                [target.name]: target.value,
            }));
        };

        const handleLogin = async () => {
            const url = `${process.env.REACT_APP_API_URL}/api/auth/local`;
            try {
                if (user.identifier && user.password) {
                    const { data } = await axios.post(url, user);
                    // console.log({ res });
                    if (data.jwt) {
                        storeUser(data)
                        setUser(initialUser);
                        navigate('/');
                        window.location.reload(true);
                        toast.success('Logged in successfully', {
                            hideProgressBar: true,
                            theme: 'dark',
                            position: "bottom-right",
                            autoClose: 1000,
                        })
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
            <div className="login" data-aos="zoom-out">
                <div className="card">
                    <div className="left">
                        <h1>Hello there.</h1>
                        <p>
                            Welcome to our fashion website! Please log in to access exclusive
                            styles and personalized recommendations.
                        </p>
                        <span>Don't have an account?</span>
                        <Link to={"/register"}>
                            <button>Register</button>
                        </Link>
                    </div>
                    <div className="right">
                        <h1>Login</h1>
                        <form>
                            <input
                                type="text"
                                onChange={handleChange}
                                placeholder={"username"}
                                name="identifier"
                                value={user.identifier}
                            />
                            <input
                                type="password"
                                onChange={handleChange}
                                placeholder={"Password"}
                                name="password"
                                value={user.password}
                            />
                            <Link>
                                <button onClick={handleLogin}>Login</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    export default Login;
