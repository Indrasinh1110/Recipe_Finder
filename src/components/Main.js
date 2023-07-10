import React, { useState, useEffect } from 'react';
import './Main.css';
import CategoryCard from './categoryWise/CategoryCard';

import Meal from './Meal';
const Navigation = () => {
    const [Category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(data => {
                setCategory(data.categories);
            })
    }, [])
    return (

        <div className='Main'>
            <Meal />
            <div className='Categories'>
                <h3 className='CategoryTag'>Categories of Food</h3>
                {Category.map((result, index) => (
                    <CategoryCard key={index} data={result} />
                ))}
            </div>
        </div>
    );
};
export default Navigation;
