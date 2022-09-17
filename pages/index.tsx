import type { NextPage } from "next";
import About from "../components/pages/home/About";
import Introduction from "../components/pages/home/Introduction";
import Product from "../components/pages/home/Product";
import Header from "../layouts/Header";

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <About />
      <Product />
    </>
  );
};

export default Home;
