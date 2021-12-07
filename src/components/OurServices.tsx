import {
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
				<Text fontWeight={600}>{text}</Text>
				<Spacer />
				<Text size='sm' onClick={handleToggle} display="inline-block">
					{show ? ( <> Close <Box display="inline-block"><IoCaretUp color="#4299E1" /></Box> </>) : ( <> Read  <Box display="inline-block"><IoCaretDown color="#4299E1"/></Box> </>) }
				</Text>
			</Stack>
			<Stack direction={'column'} align={'left'} p='0 0 0 40px'>
				<Collapse startingHeight={0} in={show} >
					{read}
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
		<Container id="services" maxW='container.lg' py={8} h='100vh'>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Stack spacing={4}>
					<Heading textAlign={['center', 'left']}>Our Services</Heading>
					<Text color={'gray.500'} fontSize={'lg'}>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore
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
							read={"React.JS Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer abore wes anderson cred nesciunt sapiente ea proident."}
						/>							
						<Feature
							icon={<Icon as={MdImportantDevices} color={'green.500'} w={5} h={5} />}
							iconBg={useColorModeValue('green.100', 'green.900')}
							text={'Refresh Websites'}
							read={"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer abore wes anderson cred nesciunt sapiente ea proident."}
						/>
						<Feature
							icon={
								<Icon as={MdSupport} color={'purple.700'} w={5} h={5} />
							}
							iconBg={useColorModeValue('purple.100', 'purple.900')}
							text={'Technical support'}
							read={"Hola soy Backup"}
						/>
					</Stack>
				</Stack>
				<Flex>
					<Image
						ref={ref}
						transition='all .3s ease-in-out'
						transform= {inView? 'scale(1)' : 'scale(0.98)'}
						alt={'feature image'}
						height='fit-content'
						src={
							'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
						}
						objectFit={'contain'}
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}