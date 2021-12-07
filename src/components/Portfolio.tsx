import React from 'react'
import { Container, Stack, Grid, GridItem, Heading, Text, SimpleGrid, Box, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import "../sass/style.scss";

import hm01 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_1.jpg'
import hm02 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_2.jpg'
import hm03 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_3.jpg'

const settings = {
    dots: true,
    lazyLoad: true,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};


export default function Portfolio() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '310px', md: '93%' });
    const side = useBreakpointValue({ base: '3px', md: '2%' });

    // These are the images used in the slide
    const cards = [
        hm01,
        hm02,
        hm03,
    ];


    return (
        <Container id="portfolio" maxW='container.lg' py={[8, 20]} minH={['100vh', 'auto']}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack>
                    <Heading textAlign={['center', 'left']}>Happy Meal</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                    I focus with these three services to offer development and support services for web
                    applications recative with React.JS, please feel free to ask if your problem is not on the list, 
                    contact me without obligation.
                    </Text>
                </Stack>
                <Stack>
                    <Box
                        position={'relative'}
                        height={'400px'}
                        width={'full'}
                        overflow={'hidden'}>
                        {/* CSS files for react-slick */}
                        <link
                            rel="stylesheet"
                            type="text/css"
                            charSet="UTF-8"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                        />
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                        />
                        {/* Left Icon */}
                        <IconButton
                            aria-label="left-arrow"
                            colorScheme="cyan"
                            color="white"
                            borderRadius={0}
                            position="absolute"
                            left={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            onClick={() => slider?.slickPrev()}>
                            <BiLeftArrowAlt />
                        </IconButton>
                        {/* Right Icon */}
                        <IconButton
                            aria-label="right-arrow"
                            colorScheme="cyan"
                            color="white"
                            borderRadius={0}
                            position="absolute"
                            right={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            onClick={() => slider?.slickNext()}>
                            <BiRightArrowAlt />
                        </IconButton>
                        {/* Slider */}
                        <Slider {...settings} ref={(slider) => setSlider(slider)}>
                            {cards.map((url, index) => (
                                <Box
                                    key={index}
                                    height={['280px', 'md']}
                                    position="relative"
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"
                                    backgroundImage={`url(${url})`}
                                    justifyContent="center"
                                />
                            ))}
                        </Slider>
                    </Box>
                </Stack>
            </SimpleGrid>
        </Container>

    )
}
