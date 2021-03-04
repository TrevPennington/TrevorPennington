import React from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import Work from "./Work";
import NavBar from "./Navbar";
import Blogs from "./BlogsC";
import ContactForm from "./ContactForm";
import Footer from "./FooterC";


const HomeWrapper = styled.div`
    width: 100%;
    background-color: var(--headerBg);
`

export default () => {

    return (
        <HomeWrapper>
            <NavBar />
            <AboutMe />
            <Work />
            <Blogs />
            <ContactForm />
            <Footer />
        </HomeWrapper>
    )
}