import { Outlet } from "react-router-dom";
import Navbar from "../Pages-Component/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";


const Root = () => {
    return (
        <div>
             <Helmet>
             <title>Fooddy24/7-Food Delivery</title>
          </Helmet>
            <div className="w-[80%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Root;