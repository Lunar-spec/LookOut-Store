import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import './App.scss';
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import SubCategories from "./components/SubCategories/SubCategories";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import { ScrollRestoration } from "react-router-dom";
import Register from "./pages/Register/Register";
import PaymentSuccessful from "./components/Payments/Success";
import Login from "./pages/Login/Login";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Logout from "./pages/Login/Logout";
import { userData } from "./components/helpers";
import Notfound from "./pages/Notfound/Notfound";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  useEffect(() => {
    AOS.init({
      offset: 140,
      duration: 500,
      easing: 'ease-in-sine',
    })
  }, [])

  const name = userData; 

  const Layout = () => {
    return (
        < div className = "app" >
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <ToastContainer />
        </div >
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!name) {
      return (<Navigate to="/login" />)
    }

    return children
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/products/:id",
          element: <Products />
        },
        {
          path: "/product/:id",
          element: <Product />
        },
        {
          path: "/contactUs",
          element: <ContactUs/>
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/subcategories/:id",
          element: <SubCategories />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/success/:id",
          element: <PaymentSuccessful />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/logout",
          element: <Logout />
        },
        {
          path: "/*",
          element: <Notfound />
        }
        
      ]
    },
  ])

  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
