import React from "react";
import img from "../../images/gif.gif";
import {
    AboutContainer,
    AboutWrapper,
    AboutCard,
    AboutH1,
    AboutH2,
    AboutH3,
    AboutP,
    Img,
} from "./InfoElements";

const InfoSection = () => {
    return (
        <AboutContainer id="about">
            <AboutH1 data-aos="fade-up">ABOUT</AboutH1>
            <Img src={img}></Img>
            <AboutWrapper>
                <AboutCard data-aos="fade-up">
                    <AboutH2>SUPPORT</AboutH2>
                    <AboutH3>_____</AboutH3>
                    <AboutP>
                        Our dedicated team of local cleaners and contractors
                        will guarantee your property is always in tip-top shape.
                        All issues will be assessed and solved in a proactive
                        and efficient manner to ensure the guest has a wonderful
                        experience!
                    </AboutP>
                </AboutCard>
                <AboutCard data-aos="fade-up">
                    <AboutH2>MAXIMIZE PROFITABILITY</AboutH2>
                    <AboutH3>_____</AboutH3>
                    <AboutP>
                        With Summit Property Management, the homeowner can
                        create passive income from their secondary home without
                        the day to day stress and hassle. We know the potential
                        of short term renting and we want to share that
                        potential with you.
                    </AboutP>
                </AboutCard>
                <AboutCard data-aos="fade-up">
                    <AboutH2>CONSULTATION</AboutH2>
                    <AboutH3>_____</AboutH3>
                    <AboutP>
                        We will assist you in the process of preparing your home
                        for short term rentals. We will help you gather all the
                        necessary items to allow every guest to enjoy their stay
                        to the fullest potential.
                    </AboutP>
                </AboutCard>
                <AboutCard data-aos="fade-up">
                    <AboutH2>TOP TIER COMMUNICATION</AboutH2>
                    <AboutH3>_____</AboutH3>
                    <AboutP>
                        Summit gives the homeowner a piece of mind with renters.
                        We answer all guest and homeowner messages at all times
                        of the day in no time at all.
                    </AboutP>
                </AboutCard>
                <AboutCard data-aos="fade-up">
                    <AboutH2>PERSONALIZED HOSTING</AboutH2>
                    <AboutH3>_____</AboutH3>
                    <AboutP>
                        Growing up and visiting the Poconos year round through
                        each season really allowed us to get to know the area
                        well. From hiking and swimming in the lakes, to skiing
                        and great restaurants. We know how to please visitors to
                        maximize their vacation.
                    </AboutP>
                </AboutCard>
                <AboutCard data-aos="fade-up">
                    <AboutH2>COMPLETE TRANSPARENCY</AboutH2>
                    <AboutH3>_____</AboutH3>
                    <AboutP>
                        Each month, Summit will provide you with a personalized
                        statement to track your revenue and expenses. This
                        allows you to see a visual representation of how your
                        rental property is doing!
                    </AboutP>
                </AboutCard>
            </AboutWrapper>
        </AboutContainer>
    );
};

export default InfoSection;
