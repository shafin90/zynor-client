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
import GapInHome from "../../pages/Home/gapInHome/gapInHome";





const Layout = () => {
    return (
        <div className="bg-black">
            <ZynorBrand></ZynorBrand>
            <CustomNavbar></CustomNavbar>
            <HeroSection></HeroSection>
            <CounterOfHeroSection></CounterOfHeroSection>
            <GapInHome></GapInHome>
            <OurCapabilities></OurCapabilities>
            <PickYourSolution></PickYourSolution>
            <FindYourWork></FindYourWork>
            <ClientsOpinion></ClientsOpinion>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Layout;