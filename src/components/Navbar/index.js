import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../../assets/logo.png";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    // NavBtn,
    // NavBtnLink
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavLogo to="/" onClick={toggleHome} src={Logo} />
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="services"
                                smooth={true}
                                duration={1000}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                SERVICES
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="about"
                                smooth={true}
                                duration={1000}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                ABOUT US
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="faq"
                                smooth={true}
                                duration={1000}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                FAQ
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="contact"
                                smooth={true}
                                duration={1000}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                CONTACT US
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
