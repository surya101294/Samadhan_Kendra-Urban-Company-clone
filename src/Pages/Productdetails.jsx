import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { postData } from '../Components/api';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button } from '@chakra-ui/react'

export default function Productdetails() {
  const { id } = useParams()
  console.log(id)
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get(`https://dbjson.onrender.com/data/${id}`)
      // .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])
  console.log(data)
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={data.image}
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{data.title}</Heading>

          <Text py='2'>
            {data.description}
          </Text>
        </CardBody>

        <CardFooter>
          <Link to={'/addToCard'}>
            <Button variant='solid' colorScheme='blue' onClick={() => postData(data)}>
              Add to cart
            </Button></Link>
        </CardFooter>
      </Stack>
    </Card>
  );
}