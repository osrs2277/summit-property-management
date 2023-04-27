import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? "#4b5320" : "#f8f0e3")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "#f8f0e3" : "#4b5320")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? "#f8f0e3" : "#0d0d0d")};
        color: ${({ dark }) => (dark ? "#0d0d0d" : "#f8f0e3")};
    }
`;
