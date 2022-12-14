import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Homemid() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Design Projects
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Book professionals from your phone
          </Text>
          <Text fontSize={{ base: 's', lg: 'lg' }} color={'gray.100'}>
          Enter your mobile number to get the App download link.
          </Text>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <input type="text" placeholder='select Country' />
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Send
            </Button>
            {/* <Button rounded={'full'}>How It Works</Button> */}
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://res.cloudinary.com/urbanclap/image/upload/w_300,f_auto/categories/category_v2/category_2d7045d0.png'
          }
        />
      </Flex>
    </Stack>
  );
}