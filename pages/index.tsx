import type { NextPage } from "next";
import About from "../components/pages/home/About";
import CustomerReview from "../components/pages/home/CustomerReview";
import HomeAds from "../components/pages/home/HomeAds";
import Introduction from "../components/pages/home/Introduction";
import Partner from "../components/pages/home/Partner";
import Product from "../components/pages/home/Product";
import Project from "../components/pages/home/Project";
import Header from "../layouts/Header";

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <About />
      <Product />
      <HomeAds />
      <Project />
      <CustomerReview />
      <Partner />
    </>
  );
};

export default Home;
