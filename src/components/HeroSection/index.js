// import React, { useState } from "react";
import React from "react";
// import Video from "../../videos/march.mp4";
// import { FaDiscord, FaTwitter } from "react-icons/fa";
import Background from "../../assets/background.png";
import {
    HeroContainer,
    HeroBg,
    // VideoBg,
    PngBg,
    HeroContent,
    HeroH1,
    HeroP,
    // HeroBtnWrapper,
    // SocialIcons,
    // SocialIconLink,
    // HeroBtnLink,
    // ArrowForward,
    // ArrowRight,
    // Discord,
    // Twitter,
} from "./HeroElements";

const HeroSection = () => {
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover);
    // };

    return (
        <HeroContainer>
            <HeroBg>
                <PngBg src={Background} />
                {/* <VideoBg
                    autoPlay
                    loop
                    muted
                    playsInline
                    // src={Video}
                    // type="video/mp4"
                >
                    <source src={Video} type="video/mp4" />
                </VideoBg> */}
            </HeroBg>
            <HeroContent>
                <HeroH1 data-aos="fade-up">
                    ENJOY A VACATION AWAY FROM YOUR VACATION HOME
                </HeroH1>
                <HeroP data-aos="fade-up">
                    LET US DO THE HARD WORK FOR YOUR SHORT TERM RENTAL LISTING
                </HeroP>
                <HeroP data-aos="fade-up">
                    SIT BACK AND RELAX WHILE YOUR MONEY WORKS FOR YOU
                </HeroP>
                {/* <HeroP></HeroP> */}
                {/* <HeroBtnWrapper> */}
                {/* <SocialIcons>
                        <Discord
                            data-aos="fade-up"
                            href="//discord.gg/7KX3BzaUFZ"
                            target="_blank"
                            aria-label="Discord"
                        >
                            <FaDiscord />
                        </Discord>
                        <Twitter
                            data-aos="fade-up"
                            href="//twitter.com/FFighters_NFT"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </Twitter>
                    </SocialIcons> */}
                {/* <HeroBtnLink
                        to="//discord.gg/7KX3BzaUFZ"
                        target="_blank"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        DISCORD{hover ? <ArrowForward /> : <ArrowRight />}
                    </HeroBtnLink> */}
                {/* </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
