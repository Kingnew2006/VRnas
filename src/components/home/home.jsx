import ReactDOM from "react-dom";
// import { useTranslation } from "react-i18next";
// import clsx from "clsx";
// import styled from "styled-components";
import HeroSection from "../home/HeroSection/HeroSection"
import Features from "../home/featuresBoard/Features";
import styled from "styled-components";


const background__lines = styled.div`
        backgroundImage: "url(public/background/Lines.png)",
        width: "1090px",
        height: "721px"
`


function Home() {
  // const { t } = useTranslation();

  return (
    <>
      <background__lines></background__lines>
      <HeroSection />
      <Features />
    </>
  )

}
 






export default Home;
