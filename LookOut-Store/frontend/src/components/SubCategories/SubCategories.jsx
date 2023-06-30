import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import SubList from '../SubList/SubList';
import './SubCategories.scss';
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const subcatid = parseInt(useParams().id);
//const subcatid = 4;
//console.log(param)

  const [maxPrice, setMaxPrice] = useState(200)

  const [sort,setSort] = useState("asc")
  
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {data,loading, error} = useFetch(`/products?filters[sub_categories][id][$eq]=${subcatid}`)

  console.log(data)

  const reset = () => {
    window.location.reload(true)
  }
  
  //console.log(selectedSubCats)

  return (
    <div className='products' data-aos="fade-up">
      <div className="left">
        <div className="filterItem">
          <h2>Filter by price:</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" className='rangeSl' min={0} max={200} onChange={(e) => setMaxPrice(e.target.value) } />
            <span>${ maxPrice }</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by:</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name='price' onChange={e => setSort("asc")} />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name='price' onChange={e => setSort("desc")} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
          <div className="reset__filters">
            <button onClick={reset}>Reset Filters</button>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      <SubList catId={subcatid} maxPrice={maxPrice} sort={sort} subCats={ selectedSubCats } />
      </div>
    </div>
  )
}

export default Products