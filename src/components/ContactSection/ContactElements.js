import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
`;

export const ContactWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    /* margin-bottom: 100px; */
    /* display: grid; */
    grid-template-columns: 1fr;
    align-items: auto;
    grid-gap: 16px;
    padding: 50px auto;

    @media screen and (max-width: 1180px) {
        grid-template-columns: 1fr;
        grid-gap: 4px;
    }
`;

export const ContactH1 = styled.h1`
    font-size: 2rem;
    color: #0d0d0d;
    margin-bottom: 25px;

    @media screen and (max-width: 480px) {
        font-size: 1.75rem;
    }
`;

export const ContactText = styled.a`
    color: #0d0d0d;
    font-size: 1.5rem;
    text-decoration: none;
    margin-bottom: 100px;
`;

export const SocialIcons = styled.div`
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
    /* width: 240px; */
`;

export const SocialIconLink = styled.a`
    color: #0d0d0d;
    font-size: 2rem;
    text-decoration: none;
`;
