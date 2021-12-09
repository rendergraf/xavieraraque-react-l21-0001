import { Container, Stack, Box, Flex, Button, Heading, Text, SimpleGrid } from "@chakra-ui/react"
import Whatsapp from "./Whatsapp"
import { BsTelephoneFill } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'


export default function Contact() {
    return (
        <Box bgColor={'gray.50'}>
            <Container id="about" maxW='container.lg' py={[8, 20]} minH={['100vh', 'auto']}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Heading textAlign={['center', 'left']} as='h2' size='xl'>
                            Contact
                        </Heading>
                        <Text paddingY={'1.2em'} fontSize='1.2em'>
                            You can contact me if you want to request some of my services, if you are part of the recruitment team, you can do it anyway, I can send you a Cover Letter or a CV in PDF if you prefer.<br /><br />

                            Telephone calls only if it is very important or urgent, office hours from 8 am to 6 pm (GMT + 1) Europe / Madrid
                        </Text>

                    </Stack>
                    <Stack bgColor={'gray.200'} borderRadius={'lg'}
                        p={['1px', '2px', '10px', '0px']}
                    >

                        <Box align="center" display="flex" flexDirection="column" justifyContent="center" height="100%">
                            <Box py="10px">
                                <Button
                                    variant="ghost"
                                    colorScheme='gray'
                                    borderRadius='0px'
                                    size='md'
                                    color="black"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('tel:+34624436094', '_blank');
                                    }}
                                    /*                   _hover={{ border: '2px solid #1C6FEB' }} */
                                    leftIcon={<BsTelephoneFill color="#1970F1" size="20px" />}>
                                    +34-624436094
                                </Button>
                            </Box>
                            <Box py="10px">
                                <Button
                                    variant="ghost"
                                    colorScheme='gray'
                                    borderRadius='0px'
                                    size='md'
                                    color="black"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('mailto:xavieraraque@gmail.com', '_blank');
                                    }}
                                    /*                   _hover={{ border: '2px solid #1C6FEB' }} */
                                    leftIcon={<MdMail color="#1970F1" size="20px" />}>
                                    xavieraraque at gmail
                                </Button>
                            </Box>


                            <Box py="10px">
                                <Button
                                    variant="ghost"
                                    colorScheme='gray'
                                    borderRadius='0px'
                                    size='md'
                                    color="black"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://www.linkedin.com/in/xavieraraque/', '_blank');
                                    }}
                                    /*                   _hover={{ border: '2px solid #1C6FEB' }} */
                                    leftIcon={<AiFillLinkedin color="#1970F1" size="20px" />}>
                                    LinkedIn
                                </Button>
                            </Box>
                            <Box py="10px">
                                <Button
                                    variant="ghost"
                                    colorScheme='gray'
                                    borderRadius='0px'
                                    size='md'
                                    color="black"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://twitter.com/xavieraraque', '_blank');
                                    }}
                                    /*                   _hover={{ border: '2px solid #1C6FEB' }} */
                                    leftIcon={<AiFillTwitterCircle  color="#1970F1" size="20px" />}>
                                    Twitter/xavieraraque
                                </Button>
                            </Box>
                            <Box py="10px">
                                <Button
                                    variant="ghost"
                                    colorScheme='gray'
                                    borderRadius='0px'
                                    size='md'
                                    color="black"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://github.com/rendergraf', '_blank');
                                    }}
                                    /*                   _hover={{ border: '2px solid #1C6FEB' }} */
                                    leftIcon={<AiFillGithub color="#1970F1" size="20px" />}>
                                    github.rendergraf
                                </Button>
                            </Box>




                            <Box py="10px">
                                <Whatsapp />
                            </Box>
                            <Box py="10px">
                                <Button
                                    variant="ghost"
                                    colorScheme='gray'
                                    borderRadius='0px'
                                    size='md'
                                    color="black"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://www.google.com/maps/place/Barcelona/@41.3926467,2.0701492,12z', '_blank');
                                    }}
                                    /*                   _hover={{ border: '2px solid #1C6FEB' }} */
                                    leftIcon={<FaMapMarkerAlt color="#1970F1" size="20px" />}>
                                    Barcelona, Spain
                                </Button>
                            </Box>
                        </Box>

                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
