import React from 'react'
import { Container, Stack, Heading, Text, Tooltip, SimpleGrid, Box, Icon, IconButton, useBreakpointValue, HStack, Button, ButtonGroup, Divider } from "@chakra-ui/react"
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FaExternalLinkSquareAlt, FaBootstrap, FaSass, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { IoLogoAngular, IoLogoCss3 } from 'react-icons/io'
import { DiMongodb } from 'react-icons/di'
import Slider from 'react-slick';
import "../sass/style.scss";

import hm01 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_1.jpg'
import hm02 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_2.jpg'
import hm03 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_3.jpg'

const settings = {
    dots: true,
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
    const top = useBreakpointValue({ base: '308px', md: '475px' });
    const side = useBreakpointValue({ base: '5px', md: '5px' });

    // These are the images used in the slide
    const cards = [
        hm01,
        hm02,
        hm03,
    ];

    return (
        <Container id="portfolio" maxW='container.lg' py={[8, 20]} minH={['100vh', 'auto']}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                <Stack>
                    <Heading textAlign={['center', 'left']}>HappyMeal.com</Heading>
                    <Text textAlign={['center', 'left']} fontWeight="bold" color={'gray.900'} fontSize={'lg'}>Client: McDonald's</Text>
                    <Text paddingY={'1.2em'} fontSize='1.2em'>
                    Team Leader Front-end, coordinate appropriate design and development of websites responsive technologies, 
                    Scrum agile management methodologies
                    </Text>
                    <ButtonGroup variant='solid' spacing='6' py={5}>
                        <Button
                            rightIcon={<FaExternalLinkSquareAlt />}
                            colorScheme='gray'
                            borderRadius='0px'
                            size='xs'
                            color="black"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.happymeal.com/', '_blank');
                            }}
                        >
                            Website
                        </Button>
                    </ButtonGroup>
                    <Divider orientation='horizontal' />
                    <Text color={'gray.800'} fontSize={'lg'}>Stack</Text>
                    <HStack justifyContent="space-between">
                        <Tooltip borderRadius="5px" hasArrow label='Angular.JS' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={IoLogoAngular} boxSize={[10, 12]} color='#dd0031' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='Node.JS' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaNodeJs} boxSize={[10, 12]} color='#569f43' />                        
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='MongoDB' bg='gray.600' color='white' placement='top'>
                            <Box>                     
                                <Icon as={DiMongodb} boxSize={[10, 12]} color='#4ca449' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='Bootstrap' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaBootstrap} boxSize={[10, 12]} color='#7811f2' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='Sass' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaSass} boxSize={[10, 12]} color='#c76494' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='HTML5' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaHtml5} boxSize={[10, 12]} color='#ea6229' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='CSS3' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={IoLogoCss3} boxSize={[10, 12]} color='#254bdd' />                            
                            </Box>
                        </Tooltip>
                    </HStack>
                </Stack>
                <Stack boxShadow='md'>
                    <Box
                        position={'relative'}
                        height={['333px', '500px']}
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
                            boxShadow='md'
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
                            boxShadow='md'
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
