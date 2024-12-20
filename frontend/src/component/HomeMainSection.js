// HomeMainSection.js

import React, { useEffect, useState } from 'react';
import reviews from '../data/reviews';
import { Link } from 'react-router-dom';

const HomeMainSection = () => {
    const [randomReviews, setRandomReviews] = useState([]);

    useEffect(() => {
        const getRandomReviews = () => {
            const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
            const selectedReviews = shuffledReviews.slice(0, 2);
            return selectedReviews;
        };

        setRandomReviews(getRandomReviews());
    }, []);

    return (
        <div>
            <h2>About Us</h2>
            {/* Company's mission and vision content */}
            <p>At ACMEPlex, we aim to provide users the best possible online movie ticket booking experience!</p>
        
           
            <Link to="/movies">
                <button>
                    Shop Now
                </button>
            </Link>
            <h2>Customer Reviews</h2>

            {randomReviews.map((review, index) => (
                <div key={index}>
                    <h3>{review.customerName}</h3>
                    <p>{review.reviewContent}</p>
                    <div>
                        {/* Display the rating stars */}
                        {Array.from({ length: review.stars }, (_, i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default HomeMainSection;