import React from "react";
import HomePage from "./HomePage";
import TopProduct from "./TopProduct";
import MainImage from "./MainImage";
import LatestDesigns from "./LatestDesigns";
import SearchArtSection from "./SearchArtSection";
import RecentlyViewed from "./RecentlyViewed";
import ImagesSection from "./ImagesSection";
import HighlightFeatures from "./HighlightFeatures";

const LandingPage = () => {
  return (
    <>
      <HomePage />
      <TopProduct />
      <MainImage />
      <LatestDesigns/>
      <SearchArtSection/>
      <RecentlyViewed/>
      <ImagesSection/>
      <HighlightFeatures/>
    </>
  );
};

export default LandingPage;
