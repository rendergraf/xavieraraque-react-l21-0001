import { chakra, Box } from "@chakra-ui/react"
import { Link } from "react-scroll";
const LinkScroll = chakra(Link);

export default function Logo(props:any) {
    return (
        <Box {...props}>
            <LinkScroll
            smooth={true}
            fontSize="lg"
            fontWeight="bold"
            to="home"
            cursor={"pointer"}>
                Xavier Araque
            </LinkScroll>
        </Box>
    )
}
