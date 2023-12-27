import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './stat.css'
const Star = ({ noOfStar = 5 }) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }
    const handleMouseEnter = (getCurrentIndex) => {
        console.log('mouseenter', getCurrentIndex);
        setHover(getCurrentIndex)
    }
    const handleMouseLeave = (getCurrentIndex) => {
        console.log('mouseleave', getCurrentIndex);
        setHover(rating)
    }
    // useEffect(() => {
    //     const signal = new AbortController()
    //     // signal.abort()
    //     const controller=signal.signal
    //     console.log({controller});

    // //   first
    
    // //   return () => {
    // //     second
    // //   }
    // }, [])
    
    return (
        <div>
            <h1>Star Rting</h1>
            {
                [...Array(noOfStar)].map((_, index) => {
                    index += 1
                    return (
                        <FaStar
                            className={index <= (hover || rating) ? 'active' : 'inActive'}
                            key={index}
                            size={40}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        />
                    )
                })
            }
        </div>
    )
}

export default Star