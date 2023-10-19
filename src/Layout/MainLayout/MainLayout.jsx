import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Banner from "../../Components/Header/Banner/Banner";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;