import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
`;

export const AboutWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: auto;
    grid-gap: 16px;
    padding: 50px auto;

    @media screen and (max-width: 1180px) {
        grid-template-columns: 1fr;
        grid-gap: 4px;
    }
`;

export const AboutCard = styled.div`
    background: #0d0d0d;
    /* display: flex; */
    flex-direction: column;
    /* justify-content: flex-start; */
    /* align-items: center; */
    border-radius: 10px;
    height: auto;
    padding: 15px;
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
    transition: all 0.2s ease-in-out;

    /* &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    } */

    @media screen and (max-width: 768px) {
        padding: 1rem;
        height: auto;
    }
`;

// export const AboutIcon = styled.img`
//     height: 35px;
//     width: 35px;
//     margin-bottom: 10px;
// `;

export const AboutH1 = styled.h1`
    font-size: 2rem;
    color: #0d0d0d;
    margin-bottom: 32px;

    @media screen and (max-width: 480px) {
        font-size: 1.75rem;
    }
`;

export const AboutH2 = styled.h2`
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

export const AboutH3 = styled.h3`
    color: #808080;
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 10px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 0.75rem;
    }
`;

export const AboutP = styled.p`
    font-size: 1rem;
    color: #ffffff;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 0.75rem;
    }
`;

export const Img = styled.img`
    width: 50%;
    /* margin: 0 0 10px 0; */
    padding-bottom: 50px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
