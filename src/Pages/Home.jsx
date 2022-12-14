import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import Homemid from './Homemid';
  import Footer from './Footer'

  export default function SplitScreen() {
    return (
        <div>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg'
            }
          />
        </Flex>

        <Flex p={8} flex={1} align={'center'} justify={'center'} bgColor={'black'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: 'xl', md: '2xl', lg: 'xl' }}>
            <Text color={'White'} as={'span'} letterSpacing={5}>
              URBAN COMPANY
              </Text>
              <br></br>
              <br />
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
                  bg: 'black',
                  zIndex: -1,
                  
                }}color={'white'}>
                Quality home services, on demand
              </Text>
              <br />{' '}
              <Text color={'white'} as={'span'}>
              Experienced, hand-picked Professionals to serve you at your doorstep
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
            Where do you need a service?
            </Text>
            {/* <Text fontSize={{ base: 's', lg: 'lg' }} color={'gray.100'}>
            Enter your mobile number to get the App download link.
            </Text> */}
  
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} position={'center'}>
              <input type="text" position={'center'} placeholder='select your City' />
              {/* <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                
              </Button> */}
              {/* <Button rounded={'full'}>How It Works</Button> */}
            </Stack>
          </Stack>
        </Flex>
        
      </Stack>

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
              Why Urban Company ?
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Transparent Pricing
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Experts only
          </Text>
          <Text fontSize={{ base: 's', lg: 'lg' }} color={'gray.100'}>
          Fully Equipped
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
      <Flex flex={1} align={'center'} justify={'center'}>
      <Stack >
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          width={'50%'}
          height={'50%'}
          src={
            'https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png'
          }
        />
        <Text fontSize={{ base: 'lg', lg: 'lg' }} color={'black'}>
          100% Quality Assured
          </Text>
          <Text fontSize={{ base: 's', lg: 'm' }} color={'gray.100'}>
          If you don't love our service, we will make it right.
          </Text>
          </Stack>
      </Flex>
    </Stack>

      <Homemid />
      <Footer />
      </div>
    );
  }