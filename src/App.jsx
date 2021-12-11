import React, { Fragment, Suspense } from 'react';
import { Center, Spinner } from '@chakra-ui/react'
/* import Header from "./components/Header"; */
/* import Hero from './components/Hero'; */
import About from './components/About';
import OurServices from './components/OurServices.tsx';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ThisWebsite from './components/ThisWebsite';
import Footer from './components/Footer'

const Header = React.lazy(() => import("./components/Header"));
const Hero = React.lazy(() => import("./components/Hero"));

export default function App() {
    return (
         <Fragment>
            <Suspense fallback={
                <Center bg='black' h='100vh' color='white'>
                    <Spinner
                    thickness='2px'
                    speed='0.65s'
                    emptyColor='gray.900'
                    color='cyan.600'
                    size='xl'/>
                </Center>
            }>
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