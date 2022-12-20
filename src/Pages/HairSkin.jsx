import React, { useState } from 'react'
import { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
  Button,
  useDisclosure,
  Grid
} from '@chakra-ui/react';
import { deleteData } from '../Components/api';
import { Link, Navigate } from 'react-router-dom';
import Productdetails from './Productdetails';
import axios from 'axios';
import { postData } from "../Components/api"

let cartArray = JSON.parse(localStorage.getItem('addCart')) || []
let priceArr = (localStorage.getItem('itemPrice')) || 0
const HairSkin = () => {
  const [data, setData] = useState([])
  const [state, setState] = useState('asc')
  const [search, setSearch] = useState('')
  // const [product,setProduct]= useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handle = () => {
    fetch(`https://dbjson.onrender.com/data?_sort=price&_order=${state}&q=${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        console.log(res)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    handle()
    deleteData()
  }, [])
  console.log(data)

  //   const handleAddCart=(data)=>{
  //     console.log(data)
  //     cartArray.push(data)
  //     console.log(cartArray)
  //     localStorage.setItem('addCart', JSON.stringify(cartArray)) 
  //     let sum=0;
  // for(let i=0;i<cartArray.length;i++){
  //     sum+=(cartArray[i].price)
  // } console.log("summm",sum)
  //   }
  console.log("cartData", cartArray)
  return (
    <div>
      <div>
        <Button onClick={() => handle(setState('asc'))}>Low to High</Button>
        <Button onClick={() => handle(setState('desc'))}>High to Low</Button>
        <input type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button onClick={handle}>Search</Button>
        <Link to="/addToCard"><Button >Move to Cart </Button></Link>
      </div>
      <Heading></Heading>
      <Grid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' spacing={2} >
        {data?.map((el) => (
          <div>
            <Card maxW='sm' key={el.id} >
              <CardBody>
                <Image
                  src={el.image}
                  alt='Green'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'> {el.title}</Heading>
                  <Text noOfLines={1}>
                    {el.description}
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    Rs. {el.price}
                  </Text>
                </Stack>
              </CardBody>

              <Divider />
              <CardFooter>
                {/* <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={onOpen} >
                  Details
                </Button> */}

                <Link to={`/product/${el.id}`} >
                  <Button variant='ghost' colorScheme='blue'  >
                    Details
                  </Button>
                </Link>
                {/* </ButtonGroup> */}
              </CardFooter>
            </Card>

          </div>
        )
        )}
      </Grid>
    </div>
  )
}

export default HairSkin