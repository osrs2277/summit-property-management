import React, { useState } from "react";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
    FaqContainer,
    FaqH1,
    AccordionContainer,
    Wrap,
    Dropdown,
} from "./FaqElements";

const FaqSection = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = (index) => {
        if (clicked === index) {
            // if clicked question is already active, then close it.
            return setClicked(null);
        }
        setClicked(index);
    };

    return (
        <IconContext.Provider value={{ color: "#ffffff", size: "25px" }}>
            <FaqContainer id="faq">
                <FaqH1 data-aos="fade-up">FAQ</FaqH1>
                <AccordionContainer>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrap
                                    data-aos="fade-up"
                                    onClick={() => toggle(index)}
                                    key={index}
                                >
                                    <h1>{item.question}</h1>
                                    <span>
                                        {clicked === index ? (
                                            <FiMinus />
                                        ) : (
                                            <FiPlus />
                                        )}
                                    </span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </>
                        );
                    })}
                </AccordionContainer>
            </FaqContainer>
        </IconContext.Provider>
    );
};

export default FaqSection;
