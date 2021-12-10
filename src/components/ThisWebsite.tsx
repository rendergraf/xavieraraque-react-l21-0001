import { Container, Text, UnorderedList, ListItem, Link, Box } from "@chakra-ui/react";

export default function ThisWebsite() {
    return (
        <Box bgColor={'yellow.100'}>
        <Container maxW='container.lg' py={'20px'}>
            <Text fontWeight={'bold'} fontSize={['1.5em']} align={'center'} py={5}>
                About this website
            </Text>
            <Text>
            This site was created to be freely distributed, you can use this code freely for its own use, the only condition is not to delete the Power By Xavier Araque and the url that redirects you to Github, as well as when you publish the site on social networks do reference to Xavier Araque as author.
            </Text>
            <Text py={5} fontWeight={'bold'}>
            For the creation of this website I use:
            </Text>
            <UnorderedList>
                <ListItem>React</ListItem>
                <ListItem>Chakra UI</ListItem>
                <ListItem>react-icons</ListItem>
                <ListItem>react-slick</ListItem>
                <ListItem>react-intersection-observer</ListItem>
                <ListItem>react-scroll</ListItem>
                <ListItem>react-tsparticles</ListItem>
                <ListItem>react-typical</ListItem>
                <ListItem>react-whatsapp</ListItem>
            </UnorderedList>
            <Text py={5} fontWeight={'bold'}>
            The programming language used was.
            </Text>
            <UnorderedList>
                <ListItem>TypeScript</ListItem>
                <ListItem>JSX</ListItem>
                <ListItem>SASS</ListItem>
            </UnorderedList>
            <Text py={5} fontWeight={'bold'}>
                Source code
            </Text>
            <Text>
                <Link href="https://github.com/rendergraf/xavieraraque-react-l21-0001">https://github.com/rendergraf/xavieraraque-react-l21-0001</Link>
            </Text>
            <Text py={5} fontWeight={'bold'}>
                Github Page
            </Text>
            <Text>
                <Link href="https://rendergraf.github.io/xavieraraque-react-l21-0001/">https://rendergraf.github.io/xavieraraque-react-l21-0001/</Link>
            </Text>
            <Text py={5} fontWeight={'bold'}>
                And enjoy!
            </Text>
        </Container>
        </Box>
    )
}
