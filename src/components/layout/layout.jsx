import Header from "../../components/header/header.jsx";
import Footer from '../../components/footer/footer.jsx';
// import { Route , Routes , RouterProvider } from 'react-router-dom'
// import background__drop from "../../assets/background/background__drop.png";
import styled from "styled-components";

const StyledImg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  background-image: url(/background/background__drop.png);
  background-size: cover;
  background-position: center;
  width: 736px;
  height: 353px; 
`;

const LayoutContainer = styled.div`
  position: relative;
`;

function Layout({ children }) {
  return (
    <LayoutContainer className="layout">
      <StyledImg />

      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
