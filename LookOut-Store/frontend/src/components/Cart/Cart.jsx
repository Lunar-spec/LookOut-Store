import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.products);

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    };

    const stripePromise = loadStripe(
        "pk_test_51McpT7SB5tMTd1XUlYvr5ehTqEjzl6uutFQszXxxbEbp6cugD39IzjOHuSWMlqhHgSGFYx5C3rQmwmIbTOpT8GjF00TurGVOZ6"
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            toast.error('Please add items in your cart to proceed', {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    };

    return (
        <div className="cart" data-aos="fade-up" data-aos-offset='80' data-aos-duration='260' data-aos-easing="ease">
            <h1>Products in your cart</h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 50)}</p>
                        <div className="price">
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlineIcon
                        className="delete"
                        onClick={() => dispatch(removeItem(item.id))}
                    />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span className="totalp">${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
    );
};

export default Cart;
