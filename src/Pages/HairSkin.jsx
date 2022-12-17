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
  ButtonGroup,
  SimpleGrid,
  Grid,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { RepeatClockIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Productdetails from './Productdetails';


// let cartArray = JSON.parse(localStorage.getItem('addCart')) || [] 
const HairSkin = () => {
  const [data, setData] = useState([])
  const [state,setState]= useState('asc')
  const [search,setSearch]= useState('')
  const [cartData,setCartData]= useState({})
  const [cart,setCart]= useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  const handle=()=>{
    fetch(`http://localhost:3000/data?_sort=price&_order=${state}&q=${search}`)
    .then((res) => res.json())
    .then((res) => {
      setData(res)
      // console.log(res)
    })
    .catch((err) => console.log(err))
  }
 
  useEffect(() => {
    handle()
  }, [])
  console.log(data)

  const handleAddCart=(el)=>{
    setCartData(el)
    setCart(setCart.push(cartData))
    // cartArray.push(cartData)
    localStorage.setItem('addCart', JSON.stringify(cart))
  }
  console.log("cartData",cart)
  return (
    <div>
      <div>
        <Button onClick={()=>handle(setState('asc'))}>Low to High</Button>
        <Button onClick={()=>handle(setState('desc'))}>High to Low</Button>
        <input type="text" placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <Button onClick={handle}>Search</Button>
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
                <Heading size='md'>{el.description}</Heading>
                <Text>
                  {el.title}
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
                
              {/* <Link to={`/paymentPage/${el.id}`} > */}
                  <Button variant='ghost' colorScheme='blue' onClick={()=>handleAddCart(el)} >
                  Procced with the Payment 
                </Button>
                {/* </Link> */}
              {/* </ButtonGroup> */}
            </CardFooter>
         </Card>
          <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{el.title}</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody> */}
            {/* <Lorem count={2} /> */}
          {/* </ModalBody> */}
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </div>
        )
        )}
      </Grid>
    </div>
  )
}

export default HairSkin