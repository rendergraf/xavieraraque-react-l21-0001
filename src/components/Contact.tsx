import { Container, Stack, Box, Button, Heading, Text, SimpleGrid, Link, Icon, Tooltip } from "@chakra-ui/react"
import Whatsapp from "./Whatsapp"
import { BsTelephoneFill } from 'react-icons/bs'
import { MdMail, MdTimer, MdTimerOff } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'


/* interface lTime {
    st: String
} */

function ifAvailable() {

    const date = new Date();
    const today = new Date(date.toLocaleString('en-US', { timeZone: "Europe/Madrid" })).getHours();
    if (today >= 8 && today <= 18) {
        return (
            <Tooltip hasArrow label='Available' bg='green' color='white' placement='top'>          
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
                    leftIcon={<BsTelephoneFill color="#1970F1" size="20px" />}>
                    +34-624436094 <Icon color="green" boxSize={6} as={MdTimer} />
                </Button>
            </Tooltip>
        );
    } else {
        return (
            <Tooltip hasArrow label='No Available' bg='red.600' color='white' placement="top">
                <Box>
                    <Button
                        isDisabled
                        cursor={'not-allowed'}
                        variant="ghost"
                        colorScheme='gray'
                        borderRadius='0px'
                        size='md'
                        color="black"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('tel:+34624436094', '_blank');
                        }}
                        leftIcon={<BsTelephoneFill color="#1970F1" size="20px" />}>
                        +34-624436094 <Icon color="red" boxSize={6} as={MdTimerOff} />
                    </Button>
                </Box>
            </Tooltip>
            
        );
    }
    
}

export default function Contact() {

    return (
        <Box bgColor={'gray.50'} paddingBottom='15em'>
            <Container id="contact" maxW='container.lg' py={[8, 20]} minH={['100vh', 'auto']}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Heading textAlign={['center', 'left']} as='h2' size='xl'>
                            Contact
                        </Heading>
                        <Text paddingY={'1.2em'} fontSize='1.2em'>
                            Contact me if you want to request some of my services. If you are part of the recruitment team, you can do it anyway, I can send you a Cover Letter or a CV in PDF version.<br /><br />
                            Please important or urgent calls only. Office hours are from 8h to 18h <Link fontWeight={'bold'} color='#4299E1' target={"_blank"} href="https://time.is/es/Spain/">(UTC+1) Europe/Madrid.</Link>
                        </Text>
                    </Stack>
                    <Stack bgColor={'gray.200'} borderRadius={'lg'} boxShadow='md'
                        p={['1px', '2px', '10px', '0px']}
                    >
                        <Box padding={['10px 3px', '30px 30px']} align="flex-start" display="flex" flexDirection="column" justifyContent="center" height="100%">
                            <Box py={["0px", "10px"]}>
                                { ifAvailable() }                                
                            </Box>
                            <Box py={["0px", "10px"]}>
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
                            <Box py={["0px", "10px"]}>
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
                            <Box py={["0px", "10px"]}>
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
                                    leftIcon={<AiFillTwitterCircle color="#1970F1" size="20px" />}>
                                    Twitter/xavieraraque
                                </Button>
                            </Box>
                            <Box py={["0px", "10px"]}>
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
                                    Github.rendergraf
                                </Button>
                            </Box>
                            <Box py={["0px", "10px"]}>
                                <Whatsapp />
                            </Box>
                            <Box py={["0px", "10px"]}>
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
