import React, { Fragment } from 'react';
import Header from "./components/Header";
import Hero from './components/Hero';
import { About } from './components/About';
import OurServices from './components/OurServices.tsx';
import Footer from './components/Footer'

export default function App() {
    return (
        <Fragment>
            <Header />
            <Hero />
            <About />
            <OurServices />
            <Footer />
        </Fragment>
    );
}