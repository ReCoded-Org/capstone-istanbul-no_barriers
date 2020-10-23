import React from "react";
import Quotes from '../../components/Quotes'
import NavBar from '../../components/NavBar'
import HowDoesWork from '../../components/HowDoesWork'
import Header from '../../components/Header'
import GetStarted from '../../components/GetStarted'
import Footer from '../../components/Footer'
import Features from '../../components/Features'
import ExploreBlogs from '../../components/ExploreBlogs'
import BrowseCategory from '../../components/BrowseCategory'

const HomePage = () =>{
    return(
        <div>
            <NavBar />
            <Header />
            <HowDoesWork />
            <BrowseCategory />
            <Features />
            <ExploreBlogs />
            <Quotes />
            <GetStarted />
            <Footer />
        </div>
    )
}

export default HomePage

