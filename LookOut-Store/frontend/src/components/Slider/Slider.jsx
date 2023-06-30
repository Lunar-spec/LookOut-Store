import React, { useState } from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './Slider.scss';
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/6069952/pexels-photo-6069952.jpeg?auto=compress&cs=tinysrgb&w=1600",  
        "https://images.pexels.com/photos/4972981/pexels-photo-4972981.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/8764484/pexels-photo-8764484.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/5119211/pexels-photo-5119211.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/6627106/pexels-photo-6627106.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 : prev => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : prev => prev + 1)
    }

    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="model1" />
                <img src={data[1]} alt="model2" />
                <img src={data[2]} alt="model3" />
                <img src={data[3]} alt="model4" />
                <img src={data[4]} alt="model5" />
            </div>
            <div className="texts">
                <div className="text">
                    Welcome fashionista!
                </div>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>

                    <KeyboardDoubleArrowLeftIcon />
                    {/* ← */}

                </div>
                <div className="icon" onClick={nextSlide}>

                    <KeyboardDoubleArrowRightIcon />
                    {/* → */}

                </div>
            </div>
        </div>
    )
}

export default Slider