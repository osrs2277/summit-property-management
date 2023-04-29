import React from "react";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    ContactContainer,
    ContactWrapper,
    ContactH1,
    ContactText,
    // SocialIcons,
    SocialIconLink,
} from "./ContactElements";

function ContactSection() {
    return (
        <ContactContainer id="contact">
            <ContactH1 data-aos="fade-up">CONTACT US</ContactH1>
            <br></br>
            <br></br>
            <ContactWrapper>
                <SocialIconLink
                    href="tel::15704465515"
                    target="_blank"
                    aria-label="Phone"
                >
                    <FaPhoneAlt />
                </SocialIconLink>
            </ContactWrapper>
            <ContactText
                href="tel::15704465515"
                target="_blank"
                aria-label="Phone"
            >
                (570) 446-5515
            </ContactText>
            <ContactWrapper>
                <SocialIconLink
                    href="mailto:summit.propeties.llc1@gmail.com"
                    target="_blank"
                    aria-label="Email"
                >
                    <MdEmail />
                </SocialIconLink>
            </ContactWrapper>
            <ContactText
                href="mailto:summit.propeties.llc1@gmail.com"
                target="_blank"
                aria-label="Email"
            >
                summit.propeties.llc1@gmail.com
            </ContactText>
            <ContactWrapper>
                <SocialIconLink target="_blank" aria-label="Hours">
                    <FaCalendarAlt />
                </SocialIconLink>
            </ContactWrapper>
            <ContactText>Mon - Sun, 8am - 8pm EST</ContactText>
            <form
                target="_blank"
                action="https://formsubmit.co/summit.propeties.llc1@gmail.com"
                method="POST"
                class="d-grid gap-2 col-6 mx-auto"
            >
                <div class="form-group">
                    <div class="form-row">
                        <div class="col">
                            <input
                                type="text"
                                name="name"
                                class="form-control"
                                placeholder="Full Name"
                                required
                            ></input>
                        </div>
                        <br></br>
                        <div class="col">
                            <input
                                type="email"
                                name="email"
                                class="form-control"
                                placeholder="Email Address"
                                required
                            ></input>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="form-group">
                    <textarea
                        placeholder="Your Message"
                        class="form-control"
                        name="message"
                        rows="10"
                        required
                    ></textarea>
                </div>
                <br></br>
                <button type="submit" class="btn btn-lg btn-dark btn-block">
                    Submit Form
                </button>
            </form>
        </ContactContainer>
    );
}

export default ContactSection;
