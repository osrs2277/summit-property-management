import React from "react";
import {
    RoadmapContainer,
    RoadmapWrapper,
    RoadmapCard,
    RoadmapH1,
    RoadmapH2,
    RoadmapH3,
    RoadmapP,
} from "./RoadmapElements";

const Roadmap = () => {
    return (
        <RoadmapContainer id="services">
            <RoadmapH1 data-aos="fade-up">SERVICES</RoadmapH1>
            <RoadmapWrapper>
                <RoadmapCard data-aos="fade-up">
                    <RoadmapH2>MARKETING</RoadmapH2>
                    <RoadmapH3>_____</RoadmapH3>
                    <RoadmapP>
                        Our clients' property will be posted on all top rental
                        sites (Airbnb, VRBO and HomeAway). With our experience
                        and background, renters will have a high level of
                        reassurance for their next trip!
                    </RoadmapP>
                </RoadmapCard>
                <RoadmapCard data-aos="fade-up">
                    <RoadmapH2>PHOTOGRAPHY</RoadmapH2>
                    <RoadmapH3>_____</RoadmapH3>
                    <RoadmapP>
                        Our in-house professional photographer has extensive
                        experience in both interior and exterior photography.
                        With our photos, your home will be sure to stand out.
                    </RoadmapP>
                </RoadmapCard>
                <RoadmapCard data-aos="fade-up">
                    <RoadmapH2>GUEST COMMUNICATION</RoadmapH2>
                    <RoadmapH3>_____</RoadmapH3>
                    <RoadmapP>
                        We take care of communicating with guests every single
                        step of the way. We pride ourselves on rapid response
                        times and offering a helping hand to guests should an
                        issue arise.
                    </RoadmapP>
                </RoadmapCard>
                <RoadmapCard data-aos="fade-up">
                    <RoadmapH2>CALENDAR OPTIMIZATION</RoadmapH2>
                    <RoadmapH3>_____</RoadmapH3>
                    <RoadmapP>
                        With our in-depth market data and high level
                        understanding of seasonal swings in the Poconos we will
                        make sure your home maintains peak occupancy rates year
                        round.
                    </RoadmapP>
                </RoadmapCard>
                <RoadmapCard data-aos="fade-up">
                    <RoadmapH2>CLEANING</RoadmapH2>
                    <RoadmapH3>_____</RoadmapH3>
                    <RoadmapP>
                        Before and after each stay, your property will be
                        cleaned extensively to ensure cleanliness. Your home
                        will have a customized cleaning process tailored for the
                        arrival of new guests.
                    </RoadmapP>
                </RoadmapCard>
                <RoadmapCard data-aos="fade-up">
                    <RoadmapH2>LINENS</RoadmapH2>
                    <RoadmapH3>_____</RoadmapH3>
                    <RoadmapP>
                        Summit will provide new sheets, comforters, pillows and
                        washcloths for guests to use in your home.
                    </RoadmapP>
                </RoadmapCard>
                <RoadmapCard data-aos="fade-up">
                    <RoadmapH2>SHARED CALENDAR</RoadmapH2>
                    <RoadmapH3>_____</RoadmapH3>
                    <RoadmapP>
                        While partnering with summit you will have live access
                        to your property's back office. This contains
                        information on upcoming reservations, guests and
                        generated revenue.
                    </RoadmapP>
                </RoadmapCard>
                <RoadmapCard data-aos="fade-up">
                    <RoadmapH2>PROPERTY GUIDE BOOK</RoadmapH2>
                    <RoadmapH3>_____</RoadmapH3>
                    <RoadmapP>
                        Each guest will have access to a guide book containing
                        an in-depth breakdown of your home. This will give
                        guests easy access to the amenities in your home and
                        local attractions.
                    </RoadmapP>
                </RoadmapCard>
            </RoadmapWrapper>
        </RoadmapContainer>
    );
};

export default Roadmap;
