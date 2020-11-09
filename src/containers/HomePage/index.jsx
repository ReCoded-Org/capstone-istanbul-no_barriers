import React from "react";
import Quotes from "../../components/Quotes";
import HowDoesItWork from "../../components/HowDoesItWork";
import TrustedBy from "../../components/TrustedBy";
import Header from "../../components/Header";
import GetStarted from "../../components/GetStarted";
import Features from "../../components/Features";
import ExploreBlogs from "../../components/ExploreBlogs";
import BrowseCategory from "../../components/BrowseCategory";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HowDoesItWork />
      <TrustedBy />
      <BrowseCategory />
      <Features />
      <ExploreBlogs />
      <Quotes />
      <GetStarted />
    </div>
  );
};

export default HomePage;
