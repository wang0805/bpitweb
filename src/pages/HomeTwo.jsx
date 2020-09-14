import React, { Component } from 'react';

//Components List
import NavBar from "../components/NavBar";
import BannerTwo from "../components/banner/BannerTwo";
import Subscribe from "../components/Subscribe";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Services from "../components/Services";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Feadback from "../components/Feadback";
import News from "../components/News";
import Work from "../components/Work";
import Partner from "../components/Partner";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ScrollUpBtn from "../components/ScrollUpBtn";

class HomeTwo extends Component {
    render() {
        return(
            <React.Fragment>
                {/* NavBar: src/components/NavBar */}
                <NavBar />
                {/* BannerTwo: src/components/banner/BannerTwo */}
                <BannerTwo />
                {/* Welcome: src/components/Welcome */}
                <Welcome />
                {/* About: src/components/About */}
                <About />
                {/* Services: src/components/Services */}
                <Services />
                {/* Team: src/components/Team */}
                <Team />
                {/* Portfolio: src/components/Portfolio */}
                <Portfolio />
                {/* Features: src/components/Features */}
                <Features />
                {/* Feadback: src/components/Feadback */}
                <Feadback />
                {/* Subscribe: src/components/Subscribe */}
                <Subscribe />
                {/* Pricing: src/components/Pricing */}
                <Pricing />
                {/* News: src/components/News */}
                <News />
                {/* Work: src/components/Work */}
                <Work />
                {/* ContactUs: src/components/ContactUs */}
                <ContactUs />
                {/* Partner: src/components/Partner */}
                <Partner />
                {/* Footer: src/components/Footer */}
                <Footer />
                {/* ScrollUpBtn: src/components/ScrollUpBtn */}
                <ScrollUpBtn />
            </React.Fragment>
        );
    }
}
export default HomeTwo;


