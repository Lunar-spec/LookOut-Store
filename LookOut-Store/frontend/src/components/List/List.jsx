import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
import Loader from '../Loader/Loader'
import ErrorIcon from '@mui/icons-material/Error';

const List = ({ subCats, maxPrice, sort, catId }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}
            &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );
    ////console.log(catId)
    ////console.log(data)
    ////console.log(subCats)
    return (
        <div className='list'>
            {error ?
                (
                    <div className="error">
                        <ErrorIcon className='icon' />Something went wrong!
                    </div>
                ) :
                loading
                    ?
                    (
                        <div className="loading">
                            <Loader />
                        </div>
                    )
                    :
                    (
                        data?.map((item) =>
                            <Card item={item} key={item.id} />
                        )
                    )
            }
        </div>
    )
}

export default List