import ClientsOpinion from "../ClientsOpinion/ClientsOpinion";
import CounterOfHeroSection from "../CounterOfHeroSection/CounterOfHeroSection";
import FAQ from "../FAQ/FAQ";
import FindYourWork from "../FindYourWork/FindYourWork";
import HeroSection from "../HeroSection/HeroSection";
import OurCapabilities from "../OurCapabilities/OurCapabilities";
import PickYourSolution from "../PickYourSolution/PickYourSolution";
import GapInHome from "../GapInHome/GapInHome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";



const Home = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    }, []);

    useEffect(() => {
        gsap.utils.toArray(".section").forEach((section, index) => {
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                onComplete: () => {
                    ScrollTrigger.refresh(); // Refresh ScrollTrigger to handle dynamic content
                },
            });
    
            // Add smooth scrolling to each section
            section.addEventListener("click", () => {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: section.offsetTop,
                        autoKill: false,
                    },
                });
            });
        });
    }, []);
    
  
    return (
        <div>
            <div className="section">
                <HeroSection></HeroSection>
            </div>
            <div className="section">
                <CounterOfHeroSection></CounterOfHeroSection>
            </div>
            <div className="section">
                <GapInHome></GapInHome>
            </div>
            <div className="section">
                <OurCapabilities></OurCapabilities>
            </div>
            <div className="section">
                <PickYourSolution></PickYourSolution>
            </div>
    
                <FindYourWork></FindYourWork>
            
            <div className="section">
                <ClientsOpinion></ClientsOpinion>
            </div>
            <div className="section">
                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;