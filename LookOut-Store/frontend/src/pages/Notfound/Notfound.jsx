import React from 'react'
import { Link } from 'react-router-dom';
import './Notfound.scss'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const Notfound = () => {
    return (
        <div className="notfound" data-aos="zoom-in">
            <div className="page__container">
                {/* <ReportGmailerrorredIcon className='icon' /> */}
                <img src="https://media.tenor.com/X0Jatl_XPOgAAAAM/the-curse-of-the-black-pearl-pirates-of-the-caribbean.gif" alt="" width={350} height={350}/>
                <h2 className="page__desc">
                    The page you are looking for doesn't exist!!
                </h2>
                <Link to={'/'}>
                    <button className='home'>
                        Home Page
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Notfound