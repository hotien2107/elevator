import type { NextPage } from "next";
import About from "../components/pages/home/About";
import Contact from "../components/pages/home/Contact";
import CustomerReview from "../components/pages/home/CustomerReview";
import HomeAds from "../components/pages/home/HomeAds";
import Introduction from "../components/pages/home/Introduction";
import News from "../components/pages/home/News";
import Partner from "../components/pages/home/Partner";
import Product from "../components/pages/home/Product";
import Project from "../components/pages/home/Project";
import Header from "../layouts/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Product />
      <HomeAds />
      <Project />
      <CustomerReview />
      <Partner />
      <News />
      <Contact />
    </>
  );
};

export default Home;
