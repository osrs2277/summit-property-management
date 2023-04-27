import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SocialIcons,
    SocialIconLink,
    // SideBtnWrap,
    // SidebarRoute
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to="services"
                        onClick={toggle}
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        SERVICES
                    </SidebarLink>
                    <SidebarLink
                        to="about"
                        onClick={toggle}
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        ABOUT US
                    </SidebarLink>
                    <SidebarLink
                        to="faq"
                        onClick={toggle}
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        FAQ
                    </SidebarLink>
                    <SidebarLink
                        to="contact"
                        onClick={toggle}
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        CONTACT US
                    </SidebarLink>
                </SidebarMenu>
                <SocialIcons>
                    <SocialIconLink
                        href="tel::15704465515"
                        target="_blank"
                        aria-label="Phone"
                    >
                        <FaPhoneAlt />
                    </SocialIconLink>
                    <SocialIconLink
                        href="mailto:summit.propeties.llc1@gmail.com"
                        target="_blank"
                        aria-label="Email"
                    >
                        <MdEmail />
                    </SocialIconLink>
                </SocialIcons>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/mint'>MINT</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
