import React from "react";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    ContactContainer,
    ContactWrapper,
    ContactH1,
    ContactText,
    // SocialIcons,
    SocialIconLink,
} from "./ContactElements";

function ContactSection() {
    return (
        <ContactContainer id="contact">
            <ContactH1 data-aos="fade-up">CONTACT US</ContactH1>
            <br></br>
            <br></br>
            <ContactWrapper>
                <SocialIconLink
                    href="tel::15704465515"
                    target="_blank"
                    aria-label="Phone"
                >
                    <FaPhoneAlt />
                </SocialIconLink>
            </ContactWrapper>
            <ContactText
                href="tel::15704465515"
                target="_blank"
                aria-label="Phone"
            >
                (570) 446-5515
            </ContactText>
            <ContactWrapper>
                <SocialIconLink
                    href="mailto:summit.propeties.llc1@gmail.com"
                    target="_blank"
                    aria-label="Email"
                >
                    <MdEmail />
                </SocialIconLink>
            </ContactWrapper>
            <ContactText
                href="mailto:summit.propeties.llc1@gmail.com"
                target="_blank"
                aria-label="Email"
            >
                summit.propeties.llc1@gmail.com
            </ContactText>
            <ContactWrapper>
                <SocialIconLink target="_blank" aria-label="Hours">
                    <FaCalendarAlt />
                </SocialIconLink>
            </ContactWrapper>
            <ContactText>Mon - Sun, 8am - 8pm</ContactText>
        </ContactContainer>
    );
}

export default ContactSection;
