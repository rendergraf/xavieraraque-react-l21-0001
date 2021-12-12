import React, { Fragment, Suspense } from 'react';
import { ScaleFade, Center, Spinner } from '@chakra-ui/react'
/* import Header from "./components/Header"; */
/* import Hero from './components/Hero'; */
import About from './components/About';
import OurServices from './components/OurServices.tsx';
/* import Portfolio from './components/Portfolio'; */
import Contact from './components/Contact';
import ThisWebsite from './components/ThisWebsite';
import Footer from './components/Footer'

const Header = React.lazy(() => import("./components/Header"));
const Hero = React.lazy(() => import("./components/Hero"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));

export default function App() {
    const isOpen= true;
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
                <ScaleFade in={isOpen} initialScale='2'>
                    <Header />
                    <Hero />
                </ScaleFade>
            </Suspense>
            <About />
            <OurServices />
            <Suspense fallback={
                <Center bg='white' h='100vh'>
                    <Spinner
                    thickness='2px'
                    speed='0.65s'
                    emptyColor='white'
                    color='cyan.600'
                    size='xl'/>
                </Center>
            }>
                <Portfolio />
            </Suspense>
            <Contact />
            <ThisWebsite />
            <Footer />
        </Fragment>
    );
}