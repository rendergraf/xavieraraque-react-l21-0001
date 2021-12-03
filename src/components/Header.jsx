import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";
import Logo from "./Logo";

export function ScrollFunction() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 96);
        });
    }, []);

    return scroll;
}

const NavBarContainer = ({ children, ...props }) => {
    const scroll = ScrollFunction();

    return (
        <Flex
            transition="background-color 0.5s ease-in-out"
            pos="fixed"
            top="0"
            id="home"
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={scroll ? ["primary.500", "primary.500", "white"] : ["primary.500", "primary.500", "transparent"] }
            color={scroll ? ["white", "white", "gray.800"] : ["white", "white", "white"] }
            {...props}
        >
            {children}
        </Flex>
    );
};

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const scroll = ScrollFunction();

    return (
        <NavBarContainer {...props}>
            <Logo w="150px" color={scroll ? ["white", "white", "gray.800"] : ["white", "white", "white"] } />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};