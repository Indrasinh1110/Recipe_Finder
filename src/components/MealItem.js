import React from "react";
import './style.css';
const MealItem = (getMeal) => {
    return (
        <>
            <div className="card">
                <img src={getMeal.data.strMealThumb} alt="meal" />
                <div className="info">
                    <h2>{getMeal.data.strMeal}</h2>
                    <p>{getMeal.data.strArea} food</p>
                </div>
                <div className="recipe">
                    <h2>Recipe</h2>
                    <p>{getMeal.data.strInstructions}</p>
                    <img src={getMeal.data.strMealThumb} alt="dish"/>
                    <a href={getMeal.data.strYoutube} target="_blank"  rel="noreferrer">Watch video  <i class='fab fa-youtube' /></a>
                </div>
            </div>
        </>
    )
}
export default MealItem;


