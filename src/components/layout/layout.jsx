import Header from '../../components/header/header.jsx';
// import Footer from '../../components/footer/footer.jsx';
import { Route , Routes , RouterProvider } from 'react-router-dom'

function Layout({ children }) {
        return (
            <div className="layout">
                
                <Header />
                <main>{children}</main>
            </div>
        );
}


export default Layout;