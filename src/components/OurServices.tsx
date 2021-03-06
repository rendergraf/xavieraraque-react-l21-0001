import {
	chakra, 
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
	Box,
	Spacer,
	Collapse
} from '@chakra-ui/react';
import {
	IoLogoReact, IoCaretDown, IoCaretUp
} from 'react-icons/io5';
import {
	MdImportantDevices, MdSupport
} from 'react-icons/md';
import { ReactElement, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-scroll";
import IMAGE from '../assets/services.png'

const Jump = chakra(Link);

interface FeatureProps {
	text: string;
	iconBg: string;
	icon?: ReactElement;
	read: string;
}


const Feature = ({ text, icon, iconBg, read }: FeatureProps) => {
	const [show, setShow] = useState(false)
	const handleToggle = () => setShow(!show)
	return (
		<Box>
			<Stack direction={'row'} align={'center'}>
				<Flex
					w={8}
					h={8}
					align={'center'}
					justify={'center'}
					rounded={'full'}
					bg={iconBg}>
					{icon}
				</Flex>
				<Text color={'white'} fontSize={['0.9em','1em']} fontWeight={'bold'}>{text}</Text>
				<Spacer />
				<Text color={'white'} fontWeight={'bold'} fontSize={['0.8em','1em']} onClick={handleToggle} display="inline-block">
					{show ? ( <> Close <Box display="inline-block"><IoCaretUp color="white" /></Box> </>) : ( <> Read  <Box display="inline-block"><IoCaretDown color="white"/></Box> </>) }
				</Text>
			</Stack>
			<Stack direction={'column'} align={'left'} p='0 0 0 40px'>
				<Collapse startingHeight={0} in={show} >
					<Text color={'white'} fontWeight={'bold'} >
						{read}
					</Text>
				</Collapse>
			</Stack>
		</Box>
	);
};

export default function SplitWithImage() {
	const { ref, inView } = useInView({
		root: null,
		rootMargin: "0px",
		threshold:1.0
	  });

	return (
		<Box bgColor={'cyan.500'} transform={'skewy(-4deg)'} paddingTop={['1em', '3em']} paddingBottom={['1em', '4em']}>
			<Container transform={'skewy(4deg)'} id="services" maxW='container.lg' py={[8,20]} px={[5,5]} minH={['100vh', 'auto']}>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
					<Stack spacing={4}>
						<Heading color={'white'} textAlign={['center', 'left']}>Services</Heading>
						<Text color={'white'} fontWeight={'bold'} paddingY={'1.2em'} fontSize='1.2em' >
						I focus on these three services to offer development and support services for 
						reactive web applications with React.JS. Please feel free to ask questions if your problem is not on the list. 
						<Jump href={'#'} to={'contact'} smooth={true} duration={500} textDecor={'underline'} fontWeight="bold" _hover={{ textDecoration: 'underline' }} color="white" cursor="pointer"> Contact</Jump> me without compromise.
						</Text>
						<Stack
							spacing={4}
							divider={
								<StackDivider
									borderColor={useColorModeValue('gray.100', 'gray.700')}
								/>
							}>
							<Feature
								icon={
									<Icon as={IoLogoReact} color={'#20232a'} w={5} h={5} />
								}
								iconBg={useColorModeValue('cyan.300', 'yellow.900')}
								text={'Web Development'}
								read={"If you want to make sure the scale of your project matches your ambitions for the future, I will use React and other libraries to build your web. I will ensure that your project is built to grow from the very beginning."}
							/>							
							<Feature
								icon={<Icon as={MdImportantDevices} color={'green.500'} w={5} h={5} />}
								iconBg={useColorModeValue('green.100', 'green.900')}
								text={'Refresh Websites/Issue'}
								read={"If you already have a website and want to refresh, create new components or have a bug, we can help with your problem."}
							/>
							<Feature
								icon={
									<Icon as={MdSupport} color={'purple.700'} w={5} h={5} />
								}
								iconBg={useColorModeValue('purple.100', 'purple.900')}
								text={'Technical support'}
								read={"If you are looking for advice to start a new project or you want to hire fixed hours per month to maintain or update your projects, we can help you."}
							/>
						</Stack>
					</Stack>
					<Flex>
						<Image
							boxShadow='md'
							ref={ref}
							transition='all .3s ease-in-out'
							transform= {inView? 'scale(1)' : 'scale(0.98)'}
							alt={'feature image'}
							height='fit-content'
							src={ IMAGE }
							objectFit={'contain'}
						/>
					</Flex>
				</SimpleGrid>
			</Container>
		</Box>
	);
}