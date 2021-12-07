import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { ScrollFunction } from "./Header"

interface MenuItemProps {
	toggle: any;
    children: any;
    to: string;
}

export default function MenuItem({ toggle, children, to = "/", ...rest }: MenuItemProps) {
    const scroll = ScrollFunction();
    return (
        <Link
            onClick={toggle}
            activeClass={scroll ? "nav-bar__box__menu-links_nav-bar-active" : '' }
            to={to}
            spy={true}
            smooth={true}
            offset={-56} /* HEADER SCROLL*/ 
            duration={500}
            >
                <Text
                cursor='pointer'
                transition='all .2s ease-in-out'
                _hover={{
                    color: "cyan.400"
                }}           
                variant='link'
                p='5px'            
                color={scroll ? ["gray.800"] : ["white"]}
                textTransform="uppercase"
                fontWeight="bold"
                display="block" {...rest}>
                    {children}
                </Text>
        </Link>
    );
};