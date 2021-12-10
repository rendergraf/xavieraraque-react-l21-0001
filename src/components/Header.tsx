import { useState, useEffect } from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";
import Logo from "./Logo";
import '../sass/header.scss'

export function ScrollFunction() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 57);
        });
    }, []);

    return scroll;
}

interface NavBarContainerProps {
	children: object;
	isOpen: object;
	mobile: boolean;
}

const NavBarContainer = ({ children, isOpen, mobile, ...props }: NavBarContainerProps) => {
    const scroll = ScrollFunction();

    return (
            <Flex
                className="nav-bar"
                transition="all 0.5s ease-in-out"
                zIndex="3"
                pos="fixed"
                top="0"
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                mb={8}
                p={scroll ? ["15px 32px"] : ["32px 32px"]}
                bg={
                    mobile ? (isOpen ? (scroll ? ["white"] : ["cyan.400"]) :
                    (scroll ? ["white"] : ["transparent"]) ) :
                    (isOpen ? (scroll ? ["white"] : ["transparent"]) :
                    (scroll ? ["white"] : ["transparent"]) )
                }
                color={scroll ? ["gray.800"] : ["white"]}
                boxShadow={scroll ? ['lg'] : [null]}
                {...props}
            >
                {children}
            </Flex>
    );
};

export default function Header(props:any) {
/*     const isLarger = useMediaQuery('(min-width: 48em)') */
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const mobile = useBreakpointValue({ base: true, md: false })
    const scroll = ScrollFunction();

    return (
        <NavBarContainer mobile={mobile} isOpen={isOpen} {...props}>
            <Logo w="150px" color={scroll ? ["gray.800"] : ["white"]} />
            <MenuToggle toggle={toggle} isOpen={isOpen} scroll={scroll} />
            <MenuLinks toggle={toggle} isOpen={isOpen} />
        </NavBarContainer>
    );
};