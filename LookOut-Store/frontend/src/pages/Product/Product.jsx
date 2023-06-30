import React, { useState } from 'react'
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import { userData } from '../../components/helpers';
import Loader from '../../components/Loader/Loader';

const Product = () => {
  const id = useParams().id;
  const {name} = userData();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  //console.log(data);
  return (
    <div className='product' data-aos='zoom-out' data-aos-duration='180' data-aos-offset='60'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg(`img`)}
              />
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg(`img2`)}
              />
            </div>
            <div className="mainImg">
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url}
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>${data?.attributes?.price}</span>
            <span className='oldPrice'>${data?.attributes?.oldPrice}</span>
            {
              name && 
              ( <div>
                <div className="quantity">
                  <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                  {quantity}
                  <button onClick={() => setQuantity(next => next + 1)}>+</button>
                </div>
                <button className='add' onClick={() => dispatch(addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  desc: data.attributes.desc,
                  img: data?.attributes?.img?.data?.attributes?.url,
                  price: data.attributes.price,
                  quantity,
                }))}>
                  <AddShoppingCartIcon /> ADD TO CART
                </button>
                </div>
              )
            }
            <div className="details">
              <span>DESCRIPTION:</span>
              <div className="info">
                <span>{data?.attributes?.desc}</span>
              </div>
              <hr />
              <span>ADDITIONAL INFORMATION:</span>
            </div>
          </div>
        </>

      )
      }

    </div>
  )
}

export default Product