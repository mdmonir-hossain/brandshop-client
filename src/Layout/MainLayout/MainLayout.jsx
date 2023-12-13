import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Banner from "../../Components/Header/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import OurPartners from "../../Components/OurPartners/OurPartners";
import ContractUs from "../../Components/ContractUs/ContractUs";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import HorizontalWrapper from "../../Components/Header/HorizontalWrapper/HorizontalWrapper";


const MainLayout = () => {
  const { theme } = useContext(AuthContext);
  
    return (
      <div id={theme}>
        <HorizontalWrapper height="40rem" direction={-1400}>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </HorizontalWrapper>
      </div>
    );
};

export default MainLayout;