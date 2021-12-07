import { Fragment } from 'react';
import Header from "./components/Header";
import Hero from './components/Hero';
import About from './components/About';
import OurServices from './components/OurServices.tsx';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'

export default function App() {
    return (
        <Fragment>
            <Header />
            <Hero />
            <About />
            <OurServices />
            <Portfolio />
            <Footer />
        </Fragment>
    );
}