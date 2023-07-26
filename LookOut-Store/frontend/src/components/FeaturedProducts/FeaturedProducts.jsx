import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"
import useFetch from '../../hooks/useFetch'
import ErrorIcon from '@mui/icons-material/Error';
import Loader from '../Loader/Loader';

const FeaturedProducts = ({ type }) => {
    //console.log(type)
    const {data, loading, error} = useFetch(`/products?filters[type][$eq]=${type}&populate=*`)
    const [products, setProducts] = useState([])
    console.log(data)

  return (
    <div className='featuredproducts' data-aos="fade-up">
          <div className="top">
              <h1>{type} products</h1>
              <p>
                {
                type === "trending" ? 
                "Check out our trending products! These are the latest and greatest styles that everyone is talking about. From bold prints to classic cuts, our collection of trending products is always up-to-date with the latest fashion trends. Don't miss out on the chance to stay ahead of the curve and shop our trending products today."
                  :
                  "Introducing our featured products! These are our top picks for the season, carefully selected by our team of fashion experts. From must-have essentials to statement pieces, our collection of featured products has something for everyone. Shop our featured products and take your wardrobe to the next level."
                  }
              </p>
          </div>
          <div className="bottom">
              {error
                  ? (
                    <div className="error">
                        <ErrorIcon className='icon'/>Something went wrong!
                    </div>
          ) 
          : loading
          ? <Loader/>
          : data?.map((item) => <Card item={item} key={item.id} />)
              }
          </div>
    </div>
  )
}

export default FeaturedProducts