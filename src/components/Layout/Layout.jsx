import CustomNavbar from "../CustomNavbar/CustomNavbar";
import HeroSection from "../../pages/Home/HeroSection/HeroSection";
import CounterOfHeroSection from "../../pages/Home/CounterOfHeroSection/CounterOfHeroSection";
import OurCapabilities from "../../pages/Home/OurCapabilities/OurCapabilities";
import Footer from "../Footer/Footer";
import PickYourSolution from "../../pages/Home/PickYourSolution/PickYourSolution";
import FindYourWork from "../../pages/Home/FindYourWork/FindYourWork";
import ClientsOpinion from "../../pages/Home/ClientsOpinion/ClientsOpinion";
import FAQ from "../../pages/Home/FAQ/FAQ";
import ZynorBrand from "../../pages/Home/ZynorBrand/ZynorBrand";
<<<<<<< HEAD
import GapInHome from "../../pages/Home/gapInHome/gapInHome";
import { Outlet } from "react-router-dom";
=======
import GapInHome from "../../pages/Home/GapInHome/GapInHome";



>>>>>>> 08a7119424d79dce826aaf99728d889a994a63d1


const Layout = () => {
    return (
        <div className="bg-black">
            <ZynorBrand></ZynorBrand>
            <CustomNavbar></CustomNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
