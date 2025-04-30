import "../../i18n/index";
import "../app/app.scss";
import Layout from "../../components/layout/layout";  
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from "../../components/home/home";
import Aboutus from "../../components/aboutus/aboutus";
import Service from "../../components/service/service";
import Page404 from "../../components/page404/page404";
import Blog from "../../components/blog/blog";

function App() {
  return (
    <>
     <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/services" element={<Service />} />
            {/* <Route path="/products" element={<Page />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Page404 />} />
            {/* <Route path="/contactus" element={<Contactus />} /> */}
          </Routes>
        </Layout>
     </BrowserRouter>

    </>
  );
} 

export default App;
