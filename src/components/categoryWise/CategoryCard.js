
import React from 'react';
import { useLocation } from 'react-router-dom';
import './CategoryCard.css';
import CategoryItems from './CategoryItems';

const CategoryCard = ({ data }) => {
    const location=useLocation();
    const dataCategory = data.strCategory;
    return (
        <div className='CategoryCard'>
            <div className='NameTag'>{data.strCategory}</div>
            <div className={`CategoryInfo ${location.pathname === '/products' ? 'ProductsPath' : ''}`}>
                <h4 className='CategoryName'>{data.strCategory}</h4>
                <p className='CategoryDescription'>
                    {data.strCategoryDescription}
                </p>
                <img
                    className='CategoryImg'
                    src={data.strCategoryThumb}
                    alt={data.strCategory}
                />
                <CategoryItems ItemsData={dataCategory} />
            </div>
        </div>
    );

};

export default CategoryCard;
