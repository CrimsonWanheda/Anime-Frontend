import React, { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import './Star.css';

const Star = ()=>{
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div className="rating">
            {[ ...Array(5)].map((star, i) =>{
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input
                            placeholder="Califica el anime" 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={()=> setRating(ratingValue) }
                        />
                        <FontAwesomeIcon 
                            className="star" 
                            color={ ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                            icon={faStar}
                            onMouseEnter={()=> setHover(ratingValue)}
                            onMouseLeave={()=> setHover(null)}
                        />
                    </label>
                )
            })}
            <p>{rating <= 0 ? 0 : rating} de 5</p>
        </div>
    )
}

// Falta implementar el sistema de post cuando ya este la funcion de usuarios

export default Star;