import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";
import Logo from "./Logo";
import '../sass/header.scss'

export function ScrollFunction() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 96);
        });
    }, []);

    return scroll;
}

const NavBarContainer = ({ children, isOpen, ...props }) => {

    const scroll = ScrollFunction();

  console.log(isOpen)

    return (
        <Flex
            className="nav-bar"
            transition="all 0.5s ease-in-out"
            zIndex="2"
            pos="fixed"
            top="0"
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={scroll ? ["15px 32px"] : ["32px 32px"] }

            bg={ isOpen ? (scroll ? ["white"] : ["cyan.400"]) : (scroll ? ["white"] : ["transparent"])}

            /* bg={scroll ? ["white"] : ["transparent"] } */


            color={scroll ? ["gray.800"] : ["white"] }
            boxShadow={scroll ? ['lg'] : [null] }
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
        <NavBarContainer isOpen={isOpen} { ...props}>
            <Logo w="150px" color={scroll ? ["gray.800"] : ["white"] } />
            <MenuToggle toggle={toggle} isOpen={isOpen} scroll={scroll} />
            <MenuLinks toggle={toggle} isOpen={isOpen} />
        </NavBarContainer>
    );
};