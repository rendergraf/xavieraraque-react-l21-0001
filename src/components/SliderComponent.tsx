import { useState } from 'react'
import Slider from 'react-slick';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react"

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

interface SliderComponentProps {
    images: string[];
}

export function SliderComponent({ images }: SliderComponentProps) {

    const [slider, setSlider] = useState<Slider | null>(null);

    const top = useBreakpointValue({ base: '308px', md: '475px' });
    const side = useBreakpointValue({ base: '5px', md: '5px' });

    return (
        <Box boxShadow='md'
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
                {images.map((url, index) => (
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
    );

}