import { chakra, Box, Stack, Button } from "@chakra-ui/react";
import { TriangleUpIcon } from '@chakra-ui/icons'
import { ScrollFunction } from "./Header"
import MenuItem from "./MenuItem";

const MenuLink = chakra(MenuItem);

interface MenuLinksProps {
    toggle: any;
    isOpen: boolean;
}

const MenuLinks = ({ toggle, isOpen }: MenuLinksProps ) => {
    const scroll = ScrollFunction();
    return (
        <Box
            className="nav-bar__box"
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                className='nav-bar__box__menu-links'
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuLink height={scroll ? "auto" : 0 } transform={scroll ? ["scaleX(1) scaleY(1)"] : ["scaleX(0) scaleY(0)"]} toggle={toggle} to="home"><TriangleUpIcon /> Up</MenuLink>
                <MenuLink toggle={toggle} to="about">About</MenuLink>
                <MenuLink toggle={toggle} to="services">Services</MenuLink>
                <MenuLink toggle={toggle} to="portfolio">Portfolio</MenuLink>
                <MenuLink to="contact" toggle={toggle}>
                    <Button
                        onClick={toggle}
                        size="sm"
                        borderRadius='0px'
                        color={scroll ? ["white"] : ["cyan.400", "white"]}
                        bg={scroll ? ["cyan.400"] : ["white", "cyan.400"]}
                        _hover={{
                            bg: ["#00d5ff", "#00d5ff"]
                        }}
                    >
                        Contact
                    </Button>
                </MenuLink>
            </Stack>
        </Box>
    );
};

export default MenuLinks;