import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Success.scss';
import { useDispatch } from 'react-redux';
import { resetCart } from '../../redux/cartReducer';

const PaymentSuccessful = () => {

    const resId = parseInt(useParams().id)

    const dispatch = useDispatch();

    const timer = setTimeout(function() {window.location='/'}, 5000)

    //console.log(resId)
  return (
    resId ? 
        (<>
        { 
          document.addEventListener("Reset Cart",dispatch(resetCart())
          ,timer
          )
        }

        <div className="payment" data-aos='zoom-out'>
        <div className="payment__container">
        <i className="fas fa-check-circle payment__icon"></i>
        <h2 className="payment__title">Payment Successful</h2>
        <p className="payment__message">
        Thank you for your purchase. Your payment was successful.
        </p>
        <Link to={'/'}><button className='home'>Home Page</button></Link>
        </div>
        </div>
        </>)
        : 
        (
            <>
        <div className="payment" data-aos='zoom-out'>
        <div className="payment__container">
        <i className="fa-sharp fa-solid fa-circle-xmark icon"></i>
        <h2 className="payment__title">Payment Not Successful</h2>
        <p className="payment__message">
        Your payment was not successful. Please try again later
        </p>
        <Link to={'/'}><button className='home'>Home Page</button></Link>
        </div>
        </div>
        </>
        )
    
  );
};

export default PaymentSuccessful;
