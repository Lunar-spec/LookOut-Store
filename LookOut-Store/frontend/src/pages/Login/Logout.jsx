import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem('user');
        navigate('/login');
        window.location.reload(true)
    }, [navigate]);

    return null
};

export default Logout;