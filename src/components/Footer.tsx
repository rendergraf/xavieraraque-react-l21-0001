import {
	Box,
	chakra,
	Container,
	Link,
	Stack,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons'
import MenuItem from "./MenuItem";

const MenuLink = chakra(MenuItem);

interface MenuLinksProps {
	toggle: any;
	isOpen: boolean;
}

export default function SmallCentered({ toggle, isOpen }: MenuLinksProps) {
	return (
		<Box
			paddingTop='20em'
			borderTopWidth={1}
			borderStyle={'solid'}
			borderColor={useColorModeValue('gray.200', 'gray.700')}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}>
			<Container
				as={Stack}
				maxW={'xlg'}
				py={4}
				spacing={4}
				justify={'center'}
				align={['center', 'flex-end']}
				fontSize={['10px', '1em']
			}
				>
				<Stack direction={'row'} spacing={[3,8]} padding={['0 0','0 15px']}>
					<MenuLink toggle={toggle} to="home" ><TriangleUpIcon /> Up</MenuLink>
					<MenuLink toggle={toggle} to="about">About</MenuLink>
					<MenuLink toggle={toggle} to="services">Services</MenuLink>
					<MenuLink toggle={toggle} to="portfolio">Portfolio</MenuLink>
					<MenuLink toggle={toggle} to="contact">Contact</MenuLink>
				</Stack>
			</Container>
			<Box>
				<Container
					as={Stack}
					maxW={'6xl'}
					py={4}
					direction={{ base: 'column', md: 'row' }}
					spacing={4}
					justify={{ base: 'center', md: 'space-between' }}
					align={{ base: 'center', md: 'center' }}>
					<Text fontSize={['0.8em','1em']}>© 2021 Xavier Araque</Text>
					<Text fontWeight={'bold'} alignSelf={['center', 'flex-end']} fontSize={['0.8em','1em']}> <Link href="https://github.com/rendergraf/xavieraraque-react-l21-0001">Power By Xavier Araque</Link></Text>
				</Container>
			</Box>
		</Box>
	);
}