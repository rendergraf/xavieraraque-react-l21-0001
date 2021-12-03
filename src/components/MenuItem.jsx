import React from "react";
import { Link, Text } from "@chakra-ui/react";

const hover = {
    color: "cyan.400"
}

export default function MenuItem({ children, isLast, to = "/", ...rest }) {
    return (
        <Link _hover={hover} href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};