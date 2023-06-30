import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
import './SubList.scss'
import Loader from '../Loader/Loader'
const List = ({ subCats, maxPrice, sort, catId }) => {

    const { data, loading, error } = useFetch(
        `/products?filters[sub_categories][id]=${catId}&filters[price][$lte]=${maxPrice}&sort=price:${sort}&populate=*`
    )

    console.log(catId, data)
    return (
        <div className='list'>
            {loading ? <div className="load">
                <Loader />
            </div> :
                data?.map((item) =>
                    <div>
                        <Card item={item} key={item.id} />
                    </div>
                )
            }
        </div>
    )
}

export default List