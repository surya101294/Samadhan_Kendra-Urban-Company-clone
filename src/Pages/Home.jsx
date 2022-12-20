import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Select
} from '@chakra-ui/react';
import Homemid from './Homemid';
import Footer from './Footer'
import Delhi from './Delhi'

// import {Link as RouterLink} from 'react-router-dom'
// import {MdArrowDropDown } from "react/icon"

import { Link as RouterLink, useNavigate } from 'react-router-dom';
export default function SplitScreen() {
  const navigate = useNavigate
  const handleChangeCountry = (e) => {
    <RouterLink to={"/delhi"}></RouterLink>
  }

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

                }} color={'white'}>
                Quality home services, on Demand
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
              {/* <input type="text" position={'center'} placeholder='select your City' /> */}
              {/* <RouterLink to={"/delhi"}>  */}

              <Select position={'center'} placeholder='Select Country' bg={'white'} variant='filled'
                onChange={handleChangeCountry}>

                <option value='option1'>India</option>
                <option value='option2'>New York</option>
                <option value='option3'>America</option>
              </Select>
              {/* </RouterLink> */}
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

      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex p={10} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '10%', md: '10%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'white',
                  zIndex: -1,
                }}>
                Why Urban Company?
              </Text>
              <br />{' '}</Heading>
            <Stack direction={{ base: 'column', md: 'row' }} >
              <Flex flex={1} position={'left'} >
                <Image ml={12}
                  alt={'Login Image'}
                  // objectFit={'cover'}
                  width={'50%'}
                  height={'70%'}
                  position={"right"}
                  src={
                    'https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png'
                  }
                />
              </Flex>
              <Flex flex={2} position={'left'} textAlign={'left'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                  <Text color={'black'} as={'span'} fontSize={{ base: 'md', lg: 'lg' }} position={'left'}>
                    Transparent Pricing
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                      See fixed prices before you book. No hidden charges.
                    </Text>
                  </Text>
                </Stack>
              </Flex>

            </Stack>

            <Stack direction={{ base: 'column', md: 'row' }} >
              <Flex flex={1} position={'left'} >
                <Image ml={12}
                  alt={'Login Image'}
                  // objectFit={'cover'}
                  width={'50%'}
                  height={'70%'}
                  position={"right"}
                  src={
                    'https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2cc7d0d0.png'
                  }
                />
              </Flex>
              <Flex flex={2} position={'left'} textAlign={'left'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                  <Text color={'black'} as={'span'} fontSize={{ base: 'md', lg: 'lg' }} position={'left'}>
                    Experts only
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                      Our professional are well trained and have on-job expertise.
                    </Text>
                  </Text>
                </Stack>
              </Flex>

            </Stack>

            <Stack direction={{ base: 'column', md: 'row' }} >
              <Flex flex={1} position={'left'} >
                <Image ml={12}
                  alt={'Category Image'}
                  // objectFit={'cover'}
                  width={'50%'}
                  height={'70%'}
                  position={"right"}
                  src={
                    'https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2caafa00.png'
                  }
                />
              </Flex>
              <Flex flex={2} position={'left'} textAlign={'left'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                  <Text color={'black'} as={'span'} fontSize={{ base: 'md', lg: 'lg' }} position={'left'}>
                    Fully Equipped
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                      We bring everything needed to get the job done well.
                    </Text>
                  </Text>
                </Stack>
              </Flex>
            </Stack>

          </Stack>
        </Flex>
        <Flex flex={1} align={'center'} pl={'8'}>
          <Stack bgColor={'green.100'} width={'60%'}>
            <Image alignContent={'center'}
              alt={'Login Image'}
              objectFit={'cover'}
              width={'70%'}
              height={'50%'}
              src={
                'https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png'
              }
            />
            <br />
            <Text fontSize={{ base: 'lg', lg: '3xl' }} color={'black'} fontWeight='semibold'>
              100% Quality Assured
            </Text>
            <Text fontSize={{ base: 's', lg: 'm' }} color={'gray'}>
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