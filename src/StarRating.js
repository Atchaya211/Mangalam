import React from 'react';
import "./style.css";

export default function StarRating ({ totalStars = 5, initialRating = 0 }) 
{
    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((star,index) => {
                return (
                    <span key={index} className={`star ${index < initialRating ? 'filled' : ''}`}>
                        &#9733;
                    </span>
                );
            })}
        </div>
    );
}