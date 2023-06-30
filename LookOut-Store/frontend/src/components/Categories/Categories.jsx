import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'

const Categories = () => {


  return (
    <div className="categories" data-aos="zoom-in">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/9771812/pexels-photo-9771812.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link className="link" to={`/products/4`}>
            <button>
              Sale
            </button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/4219597/pexels-photo-4219597.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/products/5" className="link">
            <button>
              New Season
            </button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/1212805/pexels-photo-1212805.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <Link to="/products/3" className="link">
                  <button>
                    Children
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/6439004/pexels-photo-6439004.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <Link to="/products/2" className="link">
              <button>
                Men
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1600052/pexels-photo-1600052.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/subcategories/4" className="link">
            <button>
              Shoes
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories