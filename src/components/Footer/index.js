import React from "react";
// import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    // SocialIcons,
    // SocialIconLink,
} from "./FooterElements";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Summit Property Management
                        </SocialLogo>
                        <WebsiteRights>
                            © {new Date().getFullYear()}
                        </WebsiteRights>
                        {/* <SocialIcons>
                            <SocialIconLink
                                href="//instagram.com/FreedomFighters_NFT"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//discord.gg/7KX3BzaUFZ"
                                target="_blank"
                                aria-label="Discord"
                            >
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//twitter.com/FFighters_NFT"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons> */}
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
