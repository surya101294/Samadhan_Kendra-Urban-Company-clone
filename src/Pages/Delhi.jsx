import React from 'react'
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Footer, { ListHeader, LargeWithAppLinksAndSocial, SocialButton } from './Footer'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Heading, Divider } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';

export default function Delhi() {
  return (
    <div>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
              Home Services, on demand
            </Text> <br />
            <Stack direction={'row'}>
              <center>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Delhi
              </Button>
              <input type="text" placeholder='Search for Service' bg={'whiteAlpha.300'}
                rounded={'full'} width={'300px'}
                color={'white'} borderRadius={'9'}
                _hover={{ bg: 'whiteAlpha.500' }}
              />
              </center>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <RouterLink to={'/hair-skin'} >
        <Flex width={'70%'} margin={'auto'} align={'center'} justifyContent={'center'}
          position={'relative'} height={'110px'}>
          <Card maxW='sm' position={'center'} align={'center'} >
            <CardBody >
              <Image width={'30px'} ml={12}
                src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg' />
              <Stack mt='2' spacing='1'>
                <Text>
                  Salon For Women
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image width={'30px'} ml={12}
                src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png'
                alt='legs'
                borderRadius='lg' />
              <Stack mt='2' spacing='1'>
                <Text>
                  Hair,Skin and Nails
                </Text>
              </Stack>
            </CardBody>
            {/* <Divider /> */}
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image width={'30px'} ml={12}
                src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg' />
              <Stack mt='2' spacing='1'>
                <Text>
                  Women's Therapies
                </Text>
              </Stack>
            </CardBody>
            {/* <Divider /> */}
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image width={'30px'} ml={10}
                src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg' />
              <Stack mt='2' spacing='1'>
                <Text>
                  Salon For Men
                </Text>
              </Stack>
            </CardBody>
            {/* <Divider /> */}
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image width={'30px'} ml={10}
                src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg' />
              <Stack mt='2' spacing='1'>
                <Text>
                  Men's Therapies
                </Text>
              </Stack>
            </CardBody>
            {/* <Divider /> */}
          </Card>
        </Flex>
        <br />
        <Text fontSize={{ base: 'lg', lg: '3xl' }} color={'black'} fontWeight='semibold'> Home Services </Text>
        <br />
        <Flex width={'80%'} margin={'auto'} align={'center'} justifyContent={'center'}
          position={'relative'} height={'110px'}>
          <Card maxW='sm' position={'center'} align={'center'} >
            <CardBody >
              <Image width={'30px'} ml={12}
                src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png'
                borderRadius='lg' />
              <Stack mt='2' spacing='1'>
                <Text>
                  Appliance Repair
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image width={'30px'} ml={12}
                src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png'
                borderRadius='lg' />
              <Stack mt='2' spacing='1'>
                <Text>
                  Home Painting
                </Text>
              </Stack>
            </CardBody>
            {/* <Divider /> */}
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image width={'30px'} ml={12}
                src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png'
                alt='Green'
                borderRadius='lg' />
              <Stack mt='2' spacing='1'>
                <Text>
                  Cleaning & Pest
                </Text>
              </Stack>
            </CardBody>
            {/* <Divider /> */}
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image width={'30px'} ml={10}
                src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg' />
              <Stack mt='2' spacing='1'>
                <Text>
                  Disinfection
                </Text>
              </Stack>
            </CardBody>
            {/* <Divider /> */}
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image width={'30px'} ml={10}
                src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg' />
              <Stack mt='2' spacing='1'>
                <Text>
                  Home Repairs
                </Text>
              </Stack>
            </CardBody>
            {/* <Divider /> */}
          </Card>
        </Flex>
      </RouterLink>
      <br />

      <Stack height={'250px'}>
        <Flex width={'23%'} gap={5} ml={5} >
          <Image _hover={{ width: '300px', height: '200px' }}
            src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670236808636-f1d72e.jpeg'
            borderRadius='lg' />
          <Image
            src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670833924412-eb2825.jpeg'
            borderRadius='lg' />
          <Image
            src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670236804067-9a707d.jpeg'
            borderRadius='lg' />
          <Image
            src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670833903513-3409ad.jpeg'
            borderRadius='lg' />
        </Flex>
      </Stack>

      <Flex width={'100%'} margin={'auto'} align={'center'} justifyContent={'center'}
        height={'400px'}>
        <Card maxW='sm' position={'center'} align={'center'} >
          <Divider />
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Expert Councelling
              </Text>
            </Stack>
          </CardBody>
          {/* <Divider /> */}
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg'
              alt='Green double couch with wooden legs'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Furniture Making,Upholestry & Polish
              </Text>
            </Stack>
          </CardBody>
          {/* <Divider /> */}
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Air Purifier
              </Text>
            </Stack>
          </CardBody>
          {/* <Divider /> */}
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                RO Water Purifier
              </Text>
            </Stack>
          </CardBody>
          {/* <Divider /> */}
        </Card>
      </Flex>

      <Heading>Salon, Spa & Massage Serviders</Heading>
      <Text color={'gray.500'}>Hygiene & Single use products| Low contect services</Text>
      <Flex width={'100%'} margin={'auto'} align={'center'} justifyContent={'center'}
        height={'400px'}>

        <Card maxW='sm' position={'center'} align={'center'} >
          <Divider />
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Salon Prime
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Salon for Men
              </Text>
            </Stack>
          </CardBody>
          {/* <Divider /> */}
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Spa for Women
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Spa for Men
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>

      <Heading> Cleaning and Pest Control</Heading>
      <Flex width={'100%'} margin={'auto'} align={'center'} justifyContent={'center'}
        height={'400px'}>
        <Card maxW='sm' position={'center'} align={'center'} >
          <Divider />
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Bathroom and Kitchen Cleaning
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Full Home Cleaning
              </Text>
            </Stack>
          </CardBody>
          {/* <Divider /> */}
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Sofa & Carpet Cleaning
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg'
              borderRadius='lg' />
            <Stack mt='2' spacing='1'>
              <Text>
                Cockroach
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>

      <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_a4e46fa0.png' />
      <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1624344861242-558286.png' />
      <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_3cffdf20.png' />

      <Footer />
    </div>
  );
}

