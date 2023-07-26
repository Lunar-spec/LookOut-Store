import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ item }) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='card' data-aos="fade-up">
        <div className="image">
          {item.attributes.isNew && <span>Fresh Picks</span>}
          <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt="" className="mainImg" />
          <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" />
        </div>
        <div className="info">
          <h2>{item?.attributes.title.substring(0, 22)}</h2>
          <div className="prices">
            <h3>${item?.attributes.oldPrice || item?.attributes.price + 20}</h3>
            <h3>${item?.attributes.price}</h3>
            {console.log(item?.attributes?.img2?.data?.attributes?.url)}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card