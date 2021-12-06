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

const IMAGE = '/images/about.jpg';

export default function Profile() {
	const { ref, inView } = useInView({
		root: null,
		rootMargin: "0px",
		threshold:1.0
	  });

	  
	return (
		<Center p='70px 0 10px 0'>
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
							window.location.href = '#about';
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
							window.location.href = '#about';
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
							window.location.href = '#about';
						}}
					>
						Twitter
					</Button>
					{/*             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              Nice Chair, pink
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                $57
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text>
            </Stack> */}
				</HStack>
			</Box>
		</Center>
	);
}