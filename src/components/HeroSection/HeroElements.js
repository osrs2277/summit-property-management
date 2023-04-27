import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
// import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    /* :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.2) 0%,
                rgba(0, 0, 0, 0.6) 100%
            ),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    } */
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

// export const VideoBg = styled.video`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: #ffffff;
// `;

export const PngBg = styled.img`
    height: 100vh;
    width: 100vw;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #0d0d0d;
    font-size: 2rem;
    line-height: 1.1;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.75rem;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #ffffff;
    font-size: 1rem;
    line-height: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 0.75rem;
        max-width: 200px;
    }
`;

// export const HeroBtnWrapper = styled.div`
//     margin-top: 48px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// export const HeroBtnLink = styled(LinkR)`
//     border-radius: 50px;
//     background: ${({ primary }) => (primary ? "#4b5320" : "#f8f0e3")};
//     white-space: nowrap;
//     padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
//     color: ${({ dark }) => (dark ? "#f8f0e3" : "#4b5320")};
//     font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
//     outline: none;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: ${({ primary }) => (primary ? "#f8f0e3" : "#4b5320")};
//         color: ${({ dark }) => (dark ? "#4b5320" : "#f8f0e3")};
//     }
// `;

// export const ArrowForward = styled(MdArrowForward)`
//     margin-left: 8px;
//     font-size: 20px;
// `;

// export const ArrowRight = styled(MdKeyboardArrowRight)`
//     margin-left: 8px;
//     font-size: 20px;
// `;

// export const SocialIcons = styled.div`
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     width: 240px;
// `;

// export const SocialIconLink = styled.a`
//     color: #f8f0e3;
//     font-size: 48px;

//     &:hover {
//         color: #4b5320;
//     }
// `;

// export const Discord = styled.a`
//     color: #f8f0e3;
//     font-size: 48px;

//     &:hover {
//         color: #5865f2;
//     }
// `;

// export const Twitter = styled.a`
//     color: #f8f0e3;
//     font-size: 48px;

//     &:hover {
//         color: #1da1f2;
//     }
// `;
