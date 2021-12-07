import { Container, Heading, Text, Center, Link, Button } from "@chakra-ui/react"
import Particles from "react-tsparticles"
import jsonParticles from '../utils/particles.json'
import { ReactTypical as Typical } from '@deadcoder0904/react-typical'
import IMAGE from '../assets/hero-bg.jpg'
import "../sass/style.scss";

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
                <Text size='4xl' fontSize='30px' spacing={1} color='white' align="center">
                    <Typical
                        steps={['Hello I´m Xavier Araque ', 1500, 'WELCOME TO MY WEBSITE', 1500, ]}
                        loop={1}
                        wrapper="p"
                    />
                </Text>
                <Heading 
                as='h1' 
                size='4xl' 
                fontSize='43px' 
                color='white' 
                bgGradient='linear(to-r, orange.100, cyan.100, purple.200)'
                bgClip='text'
                fontWeight='extrabold' 
                textAlign='center'              
                >
                    <Typical
                        steps={[7000, 'React.js Developer', 1500, 'Excellent technical communication', 1500, 'Core skills and algorithms', 1500, 'Proactive problem-solving', 0]}
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

export default Hero;