import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "#ffffff" : "#ffffff")};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled.img`
    height: 100%;
    width: 100%;
    -o-object-fit: contain;
    object-fit: contain;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        height: 100%;
        width: 100%;
        -o-object-fit: contain;
        object-fit: contain;
    }
`;

// export const NavLogo = styled(LinkS)`
//     color: #0d0d0d;
//     white-space: nowrap;
//     /* background: url("https://media.giphy.com/media/cd1sDQOKMfUXJmivHX/giphy.gif") repeat;
//     background-position: 18% 28%;
//     -webkit-background-clip: text;
//     color: transparent; */

//     justify-self: flex-start;
//     cursor: pointer;
//     font-size: 2.5rem;
//     display: flex;
//     align-items: center;
//     margin-left: 24px;
//     font-weight: bold;
//     text-decoration: none;

//     @media screen and (max-width: 949px) {
//         color: #f8f0e3;
//         /* background-position: 24% 31%; */
//         position: absolute;
//         top: 0;
//         left: 0;
//         transform: translate(0%, 90%);
//         justify-self: flex-start;
//         cursor: pointer;
//         font-size: 1.25rem;
//         display: flex;
//         align-items: center;
//         margin-left: 24px;
//         font-weight: bold;
//         text-decoration: none;
//     }
// `;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 949px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #0d0d0d;

        &:hover {
            color: #0d0d0d;
            transition: 0.2s ease-in-out;
        }
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 949px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #0d0d0d;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #0d0d0d;
        border-bottom: 3px solid #0d0d0d;
    }

    &:hover {
        color: #0d0d0d;
        border-bottom: 3px solid #0d0d0d;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

// export const NavBtnLink = styled(LinkR)`
//     border-radius: 50px;
//     background: #4b5320;
//     white-space: nowrap;
//     padding: 10px 22px;
//     color: #f8f0e3;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #f8f0e3;
//         color: #4b5320;
//     }
// `;
