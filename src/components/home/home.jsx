import ReactDOM from "react-dom";
// import { useTranslation } from "react-i18next";
// import clsx from "clsx";
import HeroSection from "../home/HeroSection/HeroSection";
import Features from "../home/featuresBoard/Features";
import styled from "styled-components";
import AboutUs from "../home/aboutus/aboutus";

const background__lines = styled.div`
        backgroundImage: "url(public/background/Lines.png)",
        width: "1090px",
        height: "721px"
`;

function Home() {

  return (
    <>
      <background__lines></background__lines>
      <HeroSection />
      <Features />
      <AboutUs />
    </>
  );
}

export default Home;