import React, { useState } from "react";
import MealItem from "./MealItem";
import './style.css';

const Meal = () => {
    const [search, setSearch] = useState(" ");
    const [MyMeal, setMeal] = useState();
    const searchMeal = (e) => {
        if (e.key === "Enter") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then(result => result.json())
                .then(data => { setMeal(data.meals); setSearch("") })
        }
    }
    return (
        <div className='HomeTag'>
            <h3 className='Home'>Search</h3>
            <div className='MealPage'>
                <div className="heading">
                    <p className="F">"F</p>
                    <p>uel your passion for food and explore a world of endless recipe possibilities with our app."</p>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal} />
                </div>
                <div className="container">
                    {
                        (MyMeal == null) ? <p className="notSearch">Not found</p> :
                            MyMeal.map((result) => {
                                return (
                                    <MealItem data={result} />)
                            }
                            )
                    }
                </div>
            </div>
        </div>
    )
}
export default Meal;