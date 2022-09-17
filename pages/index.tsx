import type { NextPage } from "next";
import About from "../components/pages/home/About";
import HomeAds from "../components/pages/home/HomeAds";
import Introduction from "../components/pages/home/Introduction";
import Product from "../components/pages/home/Product";
import Header from "../layouts/Header";

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <About />
      <Product />
      <HomeAds />
    </>
  );
};

export default Home;
