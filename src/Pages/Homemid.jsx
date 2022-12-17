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
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={2} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading mt={'10'} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
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
                // bg: 'blue.400',
                zIndex: -1,
              }}>
              Book professionals from your phone
            </Text>
            <br />{' '}
            <br />
            {/* <Text color={'white'} as={'span'}>
             Enter your mobile number to get the App download link. 
            </Text>{' '} */}
          </Heading>
          {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            
          </Text>
          <Text fontSize={{ base: 's', lg: 'lg' }} color={'gray.100'}>
          
          </Text> */}
          <Flex gap={'50px'} position={'center'} pl={'10'} >
            <Image ml={'10'}
              alt={'Google pay'}
              // objectFit={'cover'}
              width={'21'}
              height={'38'}
              src={
                'https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png'
              }
            />
            <Image
              alt={'App store'}
              // objectFit={'cover'}
              width={'21'}
              height={'38'}
              src={
                'https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png'
              }
            />
          </Flex>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            {/* <input type="text" placeholder='select Country' /> */}
            {/* <Button
              rounded={'full'}
              bg={'white.400'}
              color={'white'}
              _hover={{
                bg: 'white.500',
              }}>
              Send
            </Button> */}
            {/* <Button rounded={'full'}>How It Works</Button> */}
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={2} gap={6} maxH={'500'}>
        <Image
          alt={'Image'}
          // objectFit={'cover'}
          src={
            'https://res.cloudinary.com/urbanclap/image/upload/w_300,f_auto/categories/category_v2/category_2d7045d0.png'
          }
        />
        {/* <Image
          alt={'Image'}
          // objectFit={'cover'}
          src={
            'https://res.cloudinary.com/urbanclap/image/upload/w_350,f_auto/categories/category_v2/category_2d013050.png'
          }
        /> */}
      </Flex>
    </Stack>
  );
}