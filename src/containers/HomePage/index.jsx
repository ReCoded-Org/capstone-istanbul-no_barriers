import React from "react";
import NavBar from '../../components/NavBar'
import HowDoesItWork from '../../components/HowDoesItWork'
import Header from '../../components/Header'
import GetStarted from '../../components/GetStarted'
import Footer from '../../components/Footer'
import Features from '../../components/Features'
import ExploreBlogs from '../../components/ExploreBlogs'
import CategoriesBrowes from '../../components/CategoriesBrowes'
import Quotes from '../../components/Quotes'


const HomePage = () => {
    return(
        <div>
        <NavBar/>
        <Header />
        <HowDoesItWork />
        <CategoriesBrowes />
        <Features />
        <ExploreBlogs />
        <Quotes />
        <GetStarted />
        <Footer />
        </div>
    )
};

export default HomePage;
