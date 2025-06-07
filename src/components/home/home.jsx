import ReactDOM from "react-dom";
import "./home.scss";
// import { useTranslation } from "react-i18next";
// import clsx from "clsx";
import HeroSection from "../home/HeroSection/HeroSection";
import Features from "../home/featuresBoard/Features";
import styled from "styled-components";
import AboutUs from "../home/aboutus/aboutus";
import Services from "../home/Ourservices/services";
import { WhyChooseUs, WhyUsImg } from "./WhyUs/WhyUs";

const BackgroundLines = styled.div`
  background-image: url(/background/Lines.png);
  width: 1090px;
  height: 721px;
  position: absolute;
  z-index: -1;
  top: 284px;
`;

function Home() {
  return (
    <>
      <BackgroundLines />
      <HeroSection />
      <Features />
      <AboutUs />
      <Services />
      <WhyChooseUs>
        <WhyUsImg />
      </WhyChooseUs>
    </>
  );
}

export default Home;
