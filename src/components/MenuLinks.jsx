import React, { useState, useEffect } from "react";
import { Box, Stack, Button } from "@chakra-ui/react";
import { ScrollFunction } from "./Header"
import MenuItem from "./MenuItem";



export default function MenuLinks({ isOpen }) {
    const scroll = ScrollFunction();
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                textTransform="uppercase"
                fontWeight="bold"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/#home">Home</MenuItem>
                <MenuItem to="/#about">About </MenuItem>
                <MenuItem to="/#services">Services </MenuItem>
                <MenuItem to="/#portfolio">Portfolio </MenuItem>
                <MenuItem to="/#testimonials">Testimonials </MenuItem>
                <MenuItem to="/#contact" isLast>
                    <Button
                        size="sm"
                        rounded="md"
                        color={["primary.500", "primary.500", "white"]}
                        bg={scroll ? ["white", "white", "gray"] : ["white", "white", "cyan.400"]}
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