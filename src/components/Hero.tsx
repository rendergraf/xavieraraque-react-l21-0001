import { chakra, Container, Heading, Text, Center, Button } from "@chakra-ui/react"
import Particles from "react-tsparticles"
import jsonParticles from '../utils/particles.json'
import { ReactTypical as Typical } from '@deadcoder0904/react-typical'
import { Link } from "react-scroll";
import IMAGE from '../assets/hero-image.jpg'
import "../sass/style.scss";

const LinkScroll = chakra(Link);

const Hero = () => {
    const particlesInit = () => {};
    const particlesLoaded = () => {};
    let jsonP:object = jsonParticles;

    return (
        <Center
        id="home"
        w="100%" h="100vh"
        loading='eager'
        overflow='hidden'
        backgroundImage={IMAGE}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgSize="cover"
        _before={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            opacity: "1",
            content: `""`,
        }}
        >
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={jsonP}
        />
            <Container maxW='container.xl' zIndex="1">
                <Text h={['30px', '35px', '40px']} size='4xl' fontSize={['20px', '25px', '30px']} spacing={1} color='white' align="center">
                    <Typical
                        steps={['Hello I´m Xavier Araque ', 1500, 'WELCOME TO MY WEBSITE', 1500, ]}
                        loop={1}
                        wrapper="p"
                    />
                </Text>
                <Heading 
                as='h1' 
                size='4xl' 
                fontSize={['20px', '28px', '43px']} 
                color='white' 
                bgGradient='linear(to-r, orange.100, cyan.100, purple.200)'
                bgClip='text'
                fontWeight='extrabold' 
                textAlign='center'
                mt='15px'
                h={['32px', '38px', '50px']}            
                >
                    <Typical
                        steps={[6000, 'React.js Developer', 2500, 'Excellent tech. communication', 2500, 'Core skills and algorithms', 1500, 'Proactive problem-solving', 0]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </Heading>
                <Center>
                    <LinkScroll to="contact" smooth={true} pt={8} offset={-56}>
                        <Button
                            colorScheme='magenta'
                            size="lg"
                            borderRadius='0px'
                        >
                            Contact
                        </Button>
                    </LinkScroll>
                </Center>
                <LinkScroll
                cursor={'pointer'}
                className='mouse-scroll'
                to='about'
                smooth={true}
                sx={{
                    '@media screen and (max-width: 48em)': {
                        display: 'none'
                    },
                  }}
                >
                    <span className="mouse-scroll__mouse">
                        <span className="mouse-scroll__mouse_movement"></span>
                    </span>
                </LinkScroll>
            </Container>
        </Center>
    )
}

export default Hero;