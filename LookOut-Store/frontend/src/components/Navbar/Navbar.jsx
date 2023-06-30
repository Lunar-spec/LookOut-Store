import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'
import { userData } from '../helpers';

const Navbar = () => {

    //     const toggleInput = () => {
    //         setShowInput(!showInput);
    // };

    const { name } = userData();
    //console.log({name})
    const [open, setOpen] = useState(false);
    const products = useSelector(state => state.cart.products)

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                    {
                        name &&
                        (
                            <div className="item">
                                <Link className='link' to={'/logout'}>Hi! {name}</Link>
                            </div>
                        )
                    }
                </div>
                <div className="center">
                    <Link className='link' to={"/"}>LookOut Store</Link>
                    <LocalOfferIcon style={{ color: '#8E44AD' }} fontSize='24' />
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to={"/about"}>About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to={"/contactUs"}>Contact</Link>
                    </div>
                    <div className="icons">
                        {/* {showInput && (
                        <input type="text" className="search-input" placeholder="Search..." />
                        )}
                <SearchIcon onClick={toggleInput} /> */}
                        {
                            !name ?
                                (
                                    <>
                                        <Link className='link' to={'/login'}>
                                            <PersonOutlineOutlinedIcon className="icons" />
                                        </Link>
                                    </>
                                ) :
                                (
                                    <>
                                        <Link className='link' to={'/logout'}>
                                            <PersonOffIcon
                                                style={{ color: '#E74C3C' }}
                                                className="icons" />
                                        </Link>
                                    </>
                                )
                        }

                        {
                            name &&
                            (
                                <div className="cartIcon" onClick={() => setOpen(!open)}>
                                    <ShoppingCartOutlinedIcon />
                                    <span>{products.length}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar