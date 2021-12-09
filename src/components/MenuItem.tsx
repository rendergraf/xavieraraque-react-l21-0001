import { chakra } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { ScrollFunction } from "./Header"

interface MenuItemProps {
	toggle: any;
    children: any;
    to: string;
}

// Create new LinkScroll custom component
const LinkScroll = chakra(Link);

export default function MenuItem({ toggle, children, to = "/", ...rest }: MenuItemProps) {
    const scroll = ScrollFunction();
    return (
        <LinkScroll
            /* Properties of react-scroll */
            onClick={toggle}
            activeClass={scroll ? "nav-bar__box__menu-links_nav-bar-active" : '' }
            to={to}
            spy={true}
            smooth={true}
            /* HEADER SCROLL*/
            offset={-56}
            duration={500}
            /* Properties of Chakra Button */
            cursor='pointer'
            transition='all .2s ease-in-out'
            variant='link'
            color={scroll ? ["gray.800"] : ["white"]}
            textTransform="uppercase"
            fontWeight="bold"
            display="block"
            _hover={{
                color: "cyan.400"
            }}
            {...rest}
            >
                {children}
        </LinkScroll>
    );
};