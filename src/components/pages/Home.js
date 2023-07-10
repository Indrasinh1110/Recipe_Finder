import React from 'react';
import '../../App.css';
import IntroPage from '../IntroPage'
import Footer from '../Footer';
import Main from '../Main';

function Home() {
    return (
        <>
            <IntroPage/>
            <Main/>
            <Footer />
        </>
    );
}

export default Home;