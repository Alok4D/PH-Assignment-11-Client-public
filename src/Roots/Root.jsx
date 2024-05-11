import { Outlet } from "react-router-dom";
import Navbar from "../Pages-Component/Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div >
            <div className="w-[80%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Root;