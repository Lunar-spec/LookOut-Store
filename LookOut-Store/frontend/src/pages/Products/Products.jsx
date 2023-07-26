import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import './Products.scss';
import useFetch from '../../hooks/useFetch'


const Products = () => {

  const catId = parseInt(useParams().id);
  //console.log(param)
  const [maxPrice, setMaxPrice] = useState(200)

  const [sort, setSort] = useState('asc');

  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  )

  //console.log(data)
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  useEffect(() => {
    // console.log(selectedSubCats)
    if (sort === 'desc' || selectedSubCats.length > 0 || maxPrice != '200') {
      window.location.reload(true)
    }
  }, [data])


  const reset = () => {
    window.location.reload(true)
  }
  //console.log(selectedSubCats)

  return (
    <div className='products' data-aos="fade-up">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories:</h2>
          {data?.map((item) => (
            <div className="inputItem check" key={item.id}>
              <input
                type="radio"
                name='category'
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price:</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              className='rangeSl'
              min={0}
              max={200}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>${maxPrice}</span>
          </div>
          <div className="ranger">
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by:</h2>
          <div className="inputItem sort" onChange={(e) => setSort("asc")}>
            <input
              type="radio"
              id='asc'
              value="asc"
              name='price'
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem sort" onChange={(e) => setSort("desc")}>
            <input
              type="radio"
              id='desc'
              value="desc"
              name='price'
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
          <div className="reset__filters">
            <button onClick={reset}>Reset Filters</button>
          </div>
        </div>
      </div>
      <div className="right">
        {
          catId === 1 ?
            <img
              className='catImg'
              src="https://images.pexels.com/photos/4672434/pexels-photo-4672434.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""
            /> :
            catId === 2 ?
              <img
                className='catImg'
                src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""
              />
              :
              <img
                className='catImg'
                src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""
              />
        }
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;