import './Card.css';
import React, { useCallback } from "react";
export const Card = props => {
    const openPhotographerSection = (index) => {
        props.setIsShowData(false)
        console.log(props)
        props.setIsPhotographerPosition(index)
    };
   
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={props.imageUrl} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{props.title}</h3>
                </div>
                <div className='card-body'>
                    <p>{props.body.slice(0, 80)}...</p>
                </div>
            </div>


        </div>
    )
}

export default Card;