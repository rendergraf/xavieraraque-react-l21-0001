import { Box, Stack, Button } from "@chakra-ui/react";
import { ScrollFunction } from "./Header"
import MenuItem from "./MenuItem";

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
                <MenuItem toggle={toggle} to="home">Home</MenuItem>
                <MenuItem toggle={toggle} to="about">About</MenuItem>
                <MenuItem toggle={toggle} to="services">Services</MenuItem>
                <MenuItem toggle={toggle} to="portfolio">Portfolio</MenuItem>
                <MenuItem toggle={toggle} to="testimonials">Testimonials</MenuItem>
                <MenuItem to="contact" toggle={toggle}>
                    <Button
                        onClick={toggle}
                        size="sm"
                        borderRadius='0px'
                        color={scroll ? ["white"] : ["cyan.400", "white"]}
                        bg={scroll ? ["cyan.400"] : ["white", "cyan.400"]}
                        _hover={{
                            bg: ["primary.100", "primary.100", "cyan.400"]
                        }}
                    >
                        Contact
                    </Button>
                </MenuItem>
            </Stack>
        </Box>
    );
};

export default MenuLinks;