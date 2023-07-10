import React from 'react';
import './IntroPage.css';
import { Link } from 'react-router-dom';
const IntroPage = () => {
    return (
        <div className="intro-page">
        <div className='intro'>
            <h2 className="punchline">Delight Your Taste Buds with Recipe Finder!</h2>
            <p className="description">Find delicious recipes for every occasion.</p>
            <Link className="start-button" to='/products'>Get Started</Link>
        </div>
        </div>
    );
};

export default IntroPage;
