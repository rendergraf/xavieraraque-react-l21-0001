import {
	Box,
	Center,
	useColorModeValue,
	Text,
	Stack,
	HStack,
	Image,
	Button
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer';

import IMAGE from '../assets/about.jpg'

export default function Profile() {
	const { ref, inView } = useInView({
		root: null,
		rootMargin: "0px",
		threshold:1.0
	  });

	return (
		<Center p='40px 0 10px 0'>
			<Box
				ref={ref}
				transition='all .3s ease-in-out'
				transform= {inView ? 'scale(1)' : 'scale(0.98)'}
				role={'group'}
				p={6}
				maxW={'330px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.800')}
				boxShadow={'xl'}
				rounded={'lg'}
				pos={'relative'}
				zIndex={1}
				_hover={{
					boxShadow: '2xl'
				}}
			>
				<Box
					rounded={'lg'}
					mt={-12}
					pos={'relative'}
					height={'250px'}
					_after={{
						transition: 'all .3s ease-in-out',
						borderRadius: 'full',
						content: '""',
						w: 'full',
						h: 'full',
						pos: 'absolute',
						top: 5,
						left: 0,
						backgroundImage: `url(${IMAGE})`,
						filter: 'blur(15px)',
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: 'blur(30px)',
						},
					}}>
					<Image
						loading='eager'
						margin="0 auto"
						borderRadius='full'
						height={250}
						width={250}
						objectFit={'cover'}
						src={IMAGE}
						alt='Xavier Araque'
					/>
				</Box>
				<Stack pt={10} align={'center'}>
					<Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
						Social Links
					</Text>
				</Stack>
				<HStack pt={10} justify="space-between">
					<Button
						rightIcon={<AiFillGithub />}
						colorScheme='gray'
						borderRadius='0px'
						size='xs'
						color="black"
						onClick={(e) => {
							e.preventDefault();
							window.open('https://github.com/rendergraf', '_blank');
						}}
					>
						Github
					</Button>
					<Button
						rightIcon={<AiFillLinkedin />}
						colorScheme='gray'
						borderRadius='0px'
						size='xs'
						color="black"
						onClick={(e) => {
							e.preventDefault();
							window.open('https://www.linkedin.com/in/xavieraraque/', '_blank');
						}}
					>
						LinkedIn
					</Button>
					<Button
						rightIcon={<AiFillTwitterCircle />}
						colorScheme='gray'
						borderRadius='0px'
						size='xs'
						color="black"
						onClick={(e) => {
							e.preventDefault();
							window.open('https://twitter.com/xavieraraque', '_blank');
						}}
					>
						Twitter
					</Button>
				</HStack>
			</Box>
		</Center>
	);
}