import { useState } from 'react';
import './rating.css'
function Rating() {
    const [rating, setRating] = useState(0);

    function handleRatingClick(index) {
        setRating(index + 1);
    }

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const starValue = index + 1;
                const starClass =
                    starValue <= rating ? 'yellow-star' : 'gray-star';

                return (
                    <span
                        key={starValue}
                        className={starClass}
                        onClick={() => handleRatingClick(index)}
                    >
            &#9733;
          </span>
                );
            })}
        </div>
    );
}

export default Rating;
