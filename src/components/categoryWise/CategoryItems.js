import React, { useState, useEffect } from 'react';
import './CategoryItems.css';
import { Link } from 'react-router-dom';
import '../style.css'
const CategoryItems = ({ ItemsData }) => {
    const [Items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${ItemsData}`
                );
                const data = await response.json();
                setItems(data.meals);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [ItemsData]);
    return (
        <div className='CategoryItems'>
            {Items.map((item) => (
                <div key={item.idMeal} >
                    <div className="card">
                        <img src={item.strMealThumb} alt="meal" />
                        <div className="info">
                            <h2>{item.strMeal}</h2>
                            <p>{item.strArea} food</p>
                        </div>
                        <div className="recipe"><p>To get Recipes and Youtube Link go to Searchbar</p>
                            <Link to='/products' >Let's Go</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryItems;
