import ClientsOpinion from "../ClientsOpinion/ClientsOpinion";
import CounterOfHeroSection from "../CounterOfHeroSection/CounterOfHeroSection";
import FAQ from "../FAQ/FAQ";
import FindYourWork from "../FindYourWork/FindYourWork";
import HeroSection from "../HeroSection/HeroSection";
import OurCapabilities from "../OurCapabilities/OurCapabilities";
import PickYourSolution from "../PickYourSolution/PickYourSolution";
import GapInHome from "../gapInHome/gapInHome";


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <CounterOfHeroSection></CounterOfHeroSection>
            <GapInHome></GapInHome>
            <OurCapabilities></OurCapabilities>
            <PickYourSolution></PickYourSolution>
            <FindYourWork></FindYourWork>
            <ClientsOpinion></ClientsOpinion>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;