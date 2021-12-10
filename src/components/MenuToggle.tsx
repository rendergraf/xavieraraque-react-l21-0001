import { Box } from "@chakra-ui/react";

function MenuIcon(scroll:any) {
    return (
        <svg
            width="24px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill={scroll.scroll ? '#1A202C': 'white' }
        >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
    )
}

function CloseIcon(scroll:any) {
    return (
        <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill={scroll.scroll ? '#1A202C': 'white' }
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
    );
}

interface MenuToggleProps {
    toggle: any;
    isOpen: boolean;
    scroll: boolean;
}

export default function MenuToggle({ toggle, isOpen, scroll }: MenuToggleProps) {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? ( <> <CloseIcon scroll={scroll}/> </>) : ( <> <MenuIcon scroll={scroll}/>  </>)}
        </Box>
    );
};