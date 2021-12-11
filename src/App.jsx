import { Fragment, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react'
import Header from "./components/Header";
import Hero from './components/Hero';
import About from './components/About';
import OurServices from './components/OurServices.tsx';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ThisWebsite from './components/ThisWebsite';
import Footer from './components/Footer'

export default function App() {
    return (
        <Fragment>
            <Suspense fallback={<Spinner />}>
                <Header />
                <Hero />
            </Suspense>
            <About />
            <OurServices />
            <Portfolio />
            <Contact />
            <ThisWebsite />
            <Footer />
        </Fragment>
    );
}