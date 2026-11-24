import HeroContent from "./HeroContent";
import "./Hero.css";

import DesktopImage from "../../assets/images/cover.webp"
import MobileImage from "../../assets/images/cover_mob.webp"

const Hero = () => {
    return (
        <section className="hero">
            <picture className="hero-background">
                <source media="(max-width: 768px)" srcSet={MobileImage} />

                <img src={DesktopImage} alt="Clout Cricket" />
            </picture>

            <div className="hero-overlay"></div>

            <HeroContent 
            heading="FIND YOUR WAY TO CLOUT" 
            description="Gear up for every game. Discover quality cricket equipment designed for players who live and breathe cricket."
            primaryButton={{
                text: "Explore Collections",
                link: "/products"
            }}
            secondaryButton={{
                text: "Our Story",
                link: "/about",
            }}
           />
        </section>
    )
}

export default Hero