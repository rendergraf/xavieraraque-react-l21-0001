import { Container, Heading, Text, Center, Link, Button } from "@chakra-ui/react"
import Particles from "react-tsparticles"
import jsonParticles from '../utils/particles.json'
import Typical from 'react-typical'
import "../sass/style.scss";


export default function Hero() {
    const particlesInit = null;
    const particlesLoaded = null;

    return (
        <Center
        id="home"
        w="100%" h="100vh"
        loading='eager'
        overflow='hidden'
        backgroundImage="url('/images/hero-bg.jpg')"
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
        options={jsonParticles}
        />
            <Container maxW='container.xl' zIndex="1">
                <Text size='4xl' fontSize='30px' spacing={1} color='white' align="center">WELCOME TO MY WEBSITE</Text>
                <Heading 
                as='h1' 
                size='4xl' 
                fontSize='43px' 
                spacing={1} 
                color='white' 
                align="center"
                bgGradient='linear(to-r, orange.100, cyan.100, purple.200)'
                bgClip='text'
                fontWeight='extrabold'                
                >
                    <Typical
                        steps={['Hello my name is Xavier Araque ', 1500, 'I´am...', 1500, 'Senior Developer ', 1500, 'Senior Developer React', 1500, 'Senior Developer ', 1500, 'Senior Developer Chakra UI', 1500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </Heading>
                <Center>
                    <Button
                    my={10} 
                    colorScheme='magenta' 
                    borderRadius='0px' 
                    size='lg'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='#about';
                        }}
                    >Contact me</Button>
                </Center>
                <Link
                className='mouse-scroll'
                href='#about'
                sx={{
                    '@media screen and (max-width: 48em)': {
                        display: 'none'
                    },
                  }}
                >
                    <span className="mouse-scroll__mouse">
                        <span className="mouse-scroll__mouse_movement"></span>
                    </span>
                </Link>
            </Container>
        </Center>
    )
}
