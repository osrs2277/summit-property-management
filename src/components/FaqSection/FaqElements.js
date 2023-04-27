import styled from "styled-components";

export const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #ffffff;
`;

export const AccordionContainer = styled.div`
    max-width: 888px;
    margin: 0 auto;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 1180px) {
        padding: 0 20px;
    }
`;

export const FaqH1 = styled.h1`
    font-size: 2rem;
    color: #0d0d0d;
    margin-bottom: 32px;

    @media screen and (max-width: 480px) {
        font-size: 1.75rem;
    }
`;

export const Wrap = styled.div`
    background: #0d0d0d;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    max-width: 100%;
    /* text-align: center; */
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #e5c797;
        transform: scale(1.02);
        /* transition: all 0.1s ease-in-out; */
        cursor: pointer;
    }

    h1 {
        padding: 2rem;
        font-size: 1.5rem;
    }

    span {
        margin-right: 1.5rem;
    }

    @media screen and (max-width: 768px) {
        h1 {
            padding: 1rem;
            font-size: 1.25rem;
        }
    }
`;

export const Dropdown = styled.div`
    background: #ffffff;
    color: #0d0d0d;
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        padding: 2rem;
        font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
        p {
            padding: 1rem;
            font-size: 0.75rem;
        }
    }
`;
