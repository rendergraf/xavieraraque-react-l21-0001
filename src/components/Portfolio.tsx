import { useState } from 'react'
import { Container, Link, Collapse, Stack, Heading, Text, Tooltip, SimpleGrid, Box, Icon, HStack, Button, ButtonGroup, Divider } from "@chakra-ui/react"
import { IoLogoAngular, IoLogoCss3, IoIosArrowDropdownCircle, IoIosArrowDropupCircle, IoLogoWordpress} from 'react-icons/io'
import { FaExternalLinkSquareAlt, FaBootstrap, FaSass, FaHtml5, FaNodeJs, FaVuejs } from 'react-icons/fa'
import { SliderComponent } from './SliderComponent';
import { SiElasticsearch} from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
import "../sass/style.scss";

/* Happy Meal */
import hm01 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_1.jpg'
import hm02 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_2.jpg'
import hm03 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_3.jpg'
import hm04 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_4.jpg'
import hm05 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_5.jpg'
import hm06 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_6.jpg'
import hm07 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_7.jpg'
import hm08 from '../assets/happymealt/HM.com_HelloKitty_MonsterJam_Home_2048x1536_R1_8.jpg'

/* Shaker */
import sm01 from '../assets/shakermuseum/home.png'
import sm02 from '../assets/shakermuseum/calendar.png'
import sm03 from '../assets/shakermuseum/blog.png'
import sm04 from '../assets/shakermuseum/collection.jpg'
import sm05 from '../assets/shakermuseum/favorite.png'
import sm06 from '../assets/shakermuseum/press.png'


export default function Portfolio() {

    const [showhm, setShowhm] = useState(false)
    const handleTogglehm = () => setShowhm(!showhm)

    const [showsm, setShowsm] = useState(false)
    const handleTogglesm = () => setShowsm(!showsm)

    const hm:string[] = [ hm01, hm02, hm03, hm04, hm05, hm06, hm07, hm08];
    const sm:string[] = [ sm01, sm02, sm03, sm04, sm05, sm06 ];
    
    return (
        <Container id="portfolio" maxW='container.lg' minH={['100vh', 'auto']} paddingTop={['2em', '1em']} marginTop={['1em', '3em']}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={[8, 20]} >
                <Stack>
                    <Heading textAlign={['center', 'left']}>HappyMeal.com</Heading>
                    <Text textAlign={['center', 'left']} fontWeight="bold" color={'gray.900'} fontSize={'lg'}>Client: McDonald's</Text>
                    <Text textAlign={['center', 'left']} color={'cyan.600'} fontWeight={'bold'}>PORTFOLIO</Text>
                    <Box padding={'1em 0 0 0'} fontSize='1.2em'>
                        <Collapse startingHeight={200} in={showhm}>
                        I worked as Technical Leader and Front-end at <Link fontWeight="bold" color={'cyan.600'} href='https://www.teravisiontech.com/' isExternal>TeravisionTech</Link> for the creation of the new HappyMeal.com site.<br /><br />
                        My proposal was to make a new wesite made with cutting-edge technologies on a Stack MEAN, Node.js, 
                        Angular MongoDB and Express. <br /><br />
                        I was in charge of a group of 14 developers, between backend, 
                        frontend and QA, it was an exciting job and a professional challenge make the components work in harmony, 
                        knowing that the world of reactive applications was booming and finally we managed to make an excellent 
                        website for one of the most important companies on the world "McDonald's".
                        </Collapse>
                        <HStack justifyContent="flex-end">
                            <Button size='sm' onClick={handleTogglehm} variant='link' colorScheme='cyan' p={2}>
                                Read {showhm ? (<>  Less <IoIosArrowDropupCircle /> </>) :  (<>  More <IoIosArrowDropdownCircle /> </>)  }
                            </Button>
                        </HStack>
                    </Box>
                    <ButtonGroup variant='solid' spacing='6'>
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
                                <Icon as={IoLogoAngular} boxSize={[9, 12]} color='#dd0031' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='Node.JS' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaNodeJs} boxSize={[9, 12]} color='#569f43' />                        
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='MongoDB' bg='gray.600' color='white' placement='top'>
                            <Box>                     
                                <Icon as={DiMongodb} boxSize={[9, 12]} color='#4ca449' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='Bootstrap' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaBootstrap} boxSize={[9, 12]} color='#7811f2' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='Sass' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaSass} boxSize={[9, 12]} color='#c76494' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='HTML5' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaHtml5} boxSize={[9, 12]} color='#ea6229' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='CSS3' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={IoLogoCss3} boxSize={[9, 12]} color='#254bdd' />                            
                            </Box>
                        </Tooltip>
                    </HStack>
                </Stack>
                <Stack>
                    <SliderComponent images={hm} />
                </Stack>
            </SimpleGrid>
            {/* Shaker museums */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={[8, 20]} >
                <Stack>
                    <Heading textAlign={['center', 'left']}>ShakerMuseum.us</Heading>
                    <Text textAlign={['center', 'left']} fontWeight="bold" color={'gray.900'} fontSize={'lg'}>Client: Shaker Museum</Text>
                    <Box paddingY={'1.2em'} fontSize='1.2em'>
                        <Collapse startingHeight={200} in={showsm}>
                        One of the projects that I liked the most was working on the development of the new site for Shaker Museum, I was hired as an outsourcer by <Link fontWeight="bold" color={'cyan.600'} href='https://studioanalogous.com/' isExternal>Studio Analogous</Link> for this challenge.<br /><br />

                        The idea was to catalog more than 18K objects, capable of performing super fast searches in its collection, we used Elastic Search replicating an API and creating a query view with Vue.JS<br /><br />

                        The client's need to have a website next to his catalog was the prevailing need, for this we made an integration of Wordrpess+Vue.JS and the result was great, the client was satisfied since he can maintain by himself, his systems of news, blog, calendars and internal pages as well as its collection catalog system.<br /><br />

                        You can see for yourself by doing a search in the <Link fontWeight="bold" color={'cyan.600'} href='https://www.shakermuseum.us/search/' isExternal>Collection</Link> section and try for example searching for the word <Link fontWeight="bold" color={'cyan.600'} href='https://www.shakermuseum.us/search/#/?q=basket' isExternal>"basket"</Link>.<br /><br />

                        It was a pleasure for me to have worked on this wonderful project with the Studio Analogous and Shaker Museum team, I learned many things from this experience.
                        </Collapse>
                        <HStack justifyContent="flex-end">
                            <Button size='sm' onClick={handleTogglesm} variant='link' colorScheme='cyan' p={2}>
                                Read {showsm ? (<>  Less <IoIosArrowDropupCircle /> </>) :  (<>  More <IoIosArrowDropdownCircle /> </>)  }
                            </Button>
                        </HStack>
                    </Box>
                    <ButtonGroup variant='solid' spacing='6'>
                        <Button
                            rightIcon={<FaExternalLinkSquareAlt />}
                            colorScheme='gray'
                            borderRadius='0px'
                            size='xs'
                            color="black"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.shakermuseum.us/', '_blank');
                            }}
                        >
                            Website
                        </Button>
                    </ButtonGroup>
                    <Divider orientation='horizontal' />
                    <Text color={'gray.800'} fontSize={'lg'}>Stack</Text>
                    <HStack justifyContent="space-between">
                        <Tooltip borderRadius="5px" hasArrow label='Wordpress' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={IoLogoWordpress} boxSize={[9, 12]} color='#32373c' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='Vue.JS' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaVuejs} boxSize={[9, 12]} color='#3fb27f' />                        
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='Elastic Search' bg='gray.600' color='white' placement='top'>
                            <Box>                     
                                <Icon as={SiElasticsearch} boxSize={[9, 12]} color='#24b5ac' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='Bootstrap' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaBootstrap} boxSize={[9, 12]} color='#7811f2' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='Sass' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaSass} boxSize={[9, 12]} color='#c76494' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='HTML5' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={FaHtml5} boxSize={[9, 12]} color='#ea6229' />
                            </Box>
                        </Tooltip>
                        <Tooltip borderRadius="5px" hasArrow label='CSS3' bg='gray.600' color='white' placement='top'>
                            <Box>
                                <Icon as={IoLogoCss3} boxSize={[9, 12]} color='#254bdd' />                            
                            </Box>
                        </Tooltip>
                    </HStack>
                </Stack>
                <Stack>
                    <SliderComponent images={sm} />
                </Stack>
            </SimpleGrid>
        </Container>

    )
}
