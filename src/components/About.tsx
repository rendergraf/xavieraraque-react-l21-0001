import React from 'react'
import { Container, Stack, Grid, GridItem, Heading, Text, Tooltip, Progress, SimpleGrid } from "@chakra-ui/react"
import Profile from './Profile';
import "../sass/style.scss";


export default function About() {  
    return (
            <Container id="about" maxW='container.lg' py={[8,20]} minH={['100vh', 'auto']}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Profile  />
                        <Grid
                                templateRows={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                                templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
                                gap={5}
                                rowGap={2}
                            >
                                <Tooltip borderRadius="5px" hasArrow label='React.JS and Native' bg='gray.600' color='white' placement='top'>
                                    <Grid
                                        p="2px 5px"
                                        transition='all .2s ease-in-out'
                                        _hover={{
                                            boxShadow: 'md',
                                            transform: 'scale(1.03)'
                                        }}
                                        templateRows='repeat(2, 1fr)'
                                        templateColumns='repeat(5, 1fr)'
                                        rowGap={0}
                                    >
                                        <GridItem colSpan={3} fontSize='12px' color='gray.800'>React</GridItem>
                                        <GridItem colSpan={2} fontSize='12px' color='gray.800' textAlign="right">99%</GridItem>
                                        <GridItem colSpan={5} h='10px'>                                        
                                            <Progress
                                                boxShadow='xs'
                                                bg='gray.200'
                                                hasStripe
                                                isAnimated
                                                value={99}
                                                size='md'
                                                colorScheme='cyan'
                                            />
                                        </GridItem>
                                    </Grid>
                                </Tooltip>
                                <Tooltip borderRadius="5px" hasArrow label='React.JS and Native' bg='gray.600' color='white' placement='top'>
                                    <Grid
                                        p="2px 5px"
                                        transition='all .2s ease-in-out'
                                        _hover={{
                                            boxShadow: 'md',
                                            transform: 'scale(1.03)'
                                        }}
                                        templateRows='repeat(2, 1fr)'
                                        templateColumns='repeat(5, 1fr)'
                                        rowGap={0}
                                    >
                                        <GridItem colSpan={3} fontSize='12px' color='gray.800'>Chakra UI</GridItem>
                                        <GridItem colSpan={2} fontSize='12px' color='gray.800' textAlign="right">96%</GridItem>
                                        <GridItem colSpan={5} h='10px'>
                                            <Progress
                                                boxShadow='xs'
                                                bg='gray.200'
                                                hasStripe
                                                isAnimated
                                                value={96}
                                                size='md'
                                                colorScheme='cyan'
                                            />
                                        </GridItem>
                                    </Grid>
                                </Tooltip>
                                <Tooltip borderRadius="5px" hasArrow label='React.JS and Native' bg='gray.600' color='white' placement='top'>
                                    <Grid
                                        p="2px 5px"
                                        transition='all .2s ease-in-out'
                                        _hover={{
                                            boxShadow: 'md',
                                            transform: 'scale(1.03)'
                                        }}
                                        templateRows='repeat(2, 1fr)'
                                        templateColumns='repeat(5, 1fr)'
                                        rowGap={0}
                                    >
                                        <GridItem colSpan={3} fontSize='12px' color='gray.800'>JavaScript</GridItem>
                                        <GridItem colSpan={2} fontSize='12px' color='gray.800' textAlign="right">97%</GridItem>
                                        <GridItem colSpan={5} h='10px'>
                                            <Progress
                                                boxShadow='xs'
                                                bg='gray.200'
                                                hasStripe
                                                isAnimated
                                                value={97}
                                                size='md'
                                                colorScheme='cyan'
                                            />
                                        </GridItem>
                                    </Grid>
                                </Tooltip>
                                <Tooltip borderRadius="5px" hasArrow label='React.JS and Native' bg='gray.600' color='white' placement='top'>
                                    <Grid
                                        p="2px 5px"
                                        transition='all .2s ease-in-out'
                                        _hover={{
                                            boxShadow: 'md',
                                            transform: 'scale(1.03)'
                                        }}
                                        templateRows='repeat(2, 1fr)'
                                        templateColumns='repeat(5, 1fr)'
                                        rowGap={0}
                                    >
                                        <GridItem colSpan={4} fontSize='12px' color='gray.800'>TypeScript</GridItem>
                                        <GridItem colSpan={1} fontSize='12px' color='gray.800' textAlign="right">93%</GridItem>
                                        <GridItem colSpan={5} h='10px'>
                                            <Progress
                                                boxShadow='xs'
                                                bg='gray.200'
                                                hasStripe
                                                isAnimated
                                                value={93}
                                                size='md'
                                                colorScheme='cyan'
                                            />
                                        </GridItem>
                                    </Grid>
                                </Tooltip>
                                <Tooltip borderRadius="5px" hasArrow label='React.JS and Native' bg='gray.600' color='white' placement='top'>
                                    <Grid
                                        p="2px 5px"
                                        transition='all .2s ease-in-out'
                                        _hover={{
                                            boxShadow: 'md',
                                            transform: 'scale(1.03)'
                                        }}
                                        templateRows='repeat(2, 1fr)'
                                        templateColumns='repeat(5, 1fr)'
                                        rowGap={0}
                                    >
                                        <GridItem colSpan={4} fontSize='12px' color='gray.800'>HTML5, CSS3, SASS</GridItem>
                                        <GridItem colSpan={1} fontSize='12px' color='gray.800' textAlign="right">100%</GridItem>
                                        <GridItem colSpan={5} h='10px'>
                                            <Progress
                                                boxShadow='xs'
                                                bg='gray.200'
                                                hasStripe
                                                isAnimated
                                                value={100}
                                                size='md'
                                                colorScheme='cyan'
                                            />
                                        </GridItem>
                                    </Grid>
                                </Tooltip>
                                <Tooltip borderRadius="5px" hasArrow label='React.JS and Native' bg='gray.600' color='white' placement='top'>
                                    <Grid
                                        p="2px 5px"
                                        transition='all .2s ease-in-out'
                                        _hover={{
                                            boxShadow: 'md',
                                            transform: 'scale(1.03)'
                                        }}
                                        templateRows='repeat(2, 1fr)'
                                        templateColumns='repeat(5, 1fr)'
                                        rowGap={0}
                                    >
                                        <GridItem colSpan={4} fontSize='12px' color='gray.800'>MySQL, Mongo DB</GridItem>
                                        <GridItem colSpan={1} fontSize='12px' color='gray.800' textAlign="right">92%</GridItem>
                                        <GridItem colSpan={5} h='10px'>
                                            <Progress
                                                boxShadow='xs'
                                                bg='gray.200'
                                                hasStripe
                                                isAnimated
                                                value={92}
                                                size='md'
                                                colorScheme='cyan'
                                            />
                                        </GridItem>
                                    </Grid>
                                </Tooltip>
                                <Tooltip borderRadius="5px" hasArrow label='React.JS and Native' bg='gray.600' color='white' placement='top'>
                                    <Grid
                                        p="2px 5px"
                                        transition='all .2s ease-in-out'
                                        _hover={{
                                            boxShadow: 'md',
                                            transform: 'scale(1.03)'
                                        }}
                                        templateRows='repeat(2, 1fr)'
                                        templateColumns='repeat(5, 1fr)'
                                        rowGap={0}
                                    >
                                        <GridItem colSpan={4} fontSize='12px' color='gray.800'>Responsive</GridItem>
                                        <GridItem colSpan={1} fontSize='12px' color='gray.800' textAlign="right">100%</GridItem>
                                        <GridItem colSpan={5} h='10px'>
                                            <Progress
                                                boxShadow='xs'
                                                bg='gray.200'
                                                hasStripe
                                                isAnimated
                                                value={100}
                                                size='md'
                                                colorScheme='cyan'
                                            />
                                        </GridItem>
                                    </Grid>
                                </Tooltip>
                                <Tooltip borderRadius="5px" hasArrow label='React.JS and Native' bg='gray.600' color='white' placement='top'>
                                    <Grid
                                        p="2px 5px"
                                        transition='all .2s ease-in-out'
                                        _hover={{
                                            boxShadow: 'md',
                                            transform: 'scale(1.03)'
                                        }}
                                        templateRows='repeat(2, 1fr)'
                                        templateColumns='repeat(5, 1fr)'
                                        rowGap={0}
                                    >
                                        <GridItem colSpan={4} fontSize='12px' color='gray.800'>Git, Github</GridItem>
                                        <GridItem colSpan={1} fontSize='12px' color='gray.800' textAlign="right">99%</GridItem>
                                        <GridItem colSpan={5} h='10px'>
                                            <Progress
                                                boxShadow='xs'
                                                bg='gray.200'
                                                hasStripe
                                                isAnimated
                                                value={99}
                                                size='md'
                                                colorScheme='cyan'
                                            />
                                        </GridItem>
                                    </Grid>
                                </Tooltip>
                            </Grid>
                    </Stack>
                    <Stack
                        p={['1', '2', '10, 0']}
                    >
                        <Stack spacing={3}>
                            <Heading textAlign={['center', 'left']} as='h2' size='xl'>
                                Xavier Araque
                            </Heading>
                            <Heading textAlign={['center', 'left']} as='h3' size='md'>
                                Software Developer
                            </Heading>
                            <Text paddingY={'20px'} fontSize='19px'>
                                I'm a full-stack engineer with over 12 years of experience in web development,
                                managing all aspects of the development process.<br /><br />

                                I worked on 20+ projects and solved complex problems in various industries including marketing,
                                eCommerce, technology, museums, jewelry.<br /><br />
                                
                                I holds a degree Bachelor in Computer Science and Engineering.
                                Me specialties include JavaScript, React, Redux, Node, TypeScript, HTML5, CSS3, SASS, PHP, REST API, Express, MongoDB, MySQL, and AWS Cloud services.<br /><br />

                                I ready for an opportunity to use his skills to grow your revenue exponentially with an excellent web product.
                            </Text>

                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>

    )
}
