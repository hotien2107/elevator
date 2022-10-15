import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import * as Scroll from "react-scroll";
import About from "../components/pages/home/About";
import Contact from "../components/pages/home/Contact";
import CustomerReview from "../components/pages/home/CustomerReview";
import HomeAds from "../components/pages/home/HomeAds";
import Introduction from "../components/pages/home/Introduction";
import News from "../components/pages/home/News";
import Partner from "../components/pages/home/Partner";
import Product from "../components/pages/home/Product";
import Project from "../components/pages/home/Project";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Home: NextPage = () => {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "inherit";
  //   };
  // }, []);

  return (
    <div className="home">
      <Head>
        <title>Hưng Phú Gia - Trang chủ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header isHome />
      <Scroll.Element name="intro">
        <Introduction />
      </Scroll.Element>

      <Scroll.Element name="about">
        <About />
      </Scroll.Element>

      <Scroll.Element name="product">
        <Product />
      </Scroll.Element>

      <HomeAds />

      <Scroll.Element name="project">
        <Project />
      </Scroll.Element>

      <Scroll.Element name="customer">
        <CustomerReview />
      </Scroll.Element>

      <Scroll.Element name="partner">
        <Partner />
      </Scroll.Element>

      <Scroll.Element name="news">
        <News />
      </Scroll.Element>

      <Scroll.Element name="contact">
        <Contact />
      </Scroll.Element>

      <Footer />
    </div>
  );
};

export default Home;
