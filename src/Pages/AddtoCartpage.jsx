import React, { useEffect, useState } from 'react'
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
  Grid, useDisclosure
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

let cartArray = JSON.parse(localStorage.getItem('addCart')) || []
function AddtoCartpage() {
  
  const { isOpen, onOpen, onClose } = useDisclosure()   
    const [tprice, setTprice]=useState(0)
    let pr
    const handleDelete=(id)=>{
      console.log(id)
      cartArray.splice(id,1)
      localStorage.setItem('addCart', JSON.stringify(cartArray))
      // window.location.reload()
      // cartArray.forEach(el => {
      //   pr= el.cartArray.price
      // });
      // console.log(pr)
      // setTprice(tprice)
    }
    // console.log(pr)
    // useEffect(()=>{
    //   cartArray
    // },[id])
  return (
    <div>
 <div>
      <div>
        <Link to={'/payment'}>
        <Button >Payment Now</Button>
        </Link>
      </div>
      <Heading>Total Item: {cartArray.length}</Heading>
      {/* <Heading>Total price: {tprice}</Heading> */}
      {/* if({cartArray}){ */}
      <Grid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' spacing={2} >
        {cartArray?.map((el) => ( 
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
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={()=>handleDelete(el.id)}>
                  Remove
                </Button>
                
                <Button variant='ghost' colorScheme='blue' >
                 PayNow  
                </Button>
              </ButtonGroup>
            </CardFooter>
         </Card>
          
          </div>
        )
        )}
      </Grid>
      {/* } */}
    </div>
    </div>
  )
}

export default AddtoCartpage
