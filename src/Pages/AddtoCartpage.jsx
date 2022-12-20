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
import { deleteData, getData } from '../Components/api';

// let cartArray = JSON.parse(localStorage.getItem('addCart')) || []
// var sum = 0;
// for (let i = 0; i < cartArray.length; i++) {
//   sum += (cartArray[i].price)
// }
var total = 0
function AddtoCartpage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState([])

  const handleGetData = async () => {
    getData()
      .then((res) => {
        console.log("ccc", res.data)
        setData(res.data)
      })
      .catch((err) => console.log(err))
    // for(let i=0;i<data.length;i++)
    //   total+= data[i].price
    // console.log(total)
  }
  useEffect(() => {
    handleGetData()
  }, [])
  const handleDelete = (id) => {
    console.log(id)
    deleteData(id)
    handleGetData()
  }
  console.log(data)
  console.log("asf", data.data)
  for (let i = 0; i < data.length; i++)
    total += data[i].price
  // data.map((el)=> total+=el.price)
  /*
  const handle = () => {
    fetch(`http://localhost:3000/data/${cartArray.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        // console.log(res)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    handle()
  }, [cartArray])
  const handleDelete = (id) => {
    console.log(id)
    cartArray.splice(id, 1)
    localStorage.setItem('addCart', JSON.stringify(cartArray))
    window.location.reload()
    // var sum=0;
    for (let i = 0; i < cartArray.length; i++) {
      sum += (cartArray[i].price)
    }
    console.log(sum)
  }
  */
  return (
    <div>
      <div>
        <div>
          <Link to={'/payment'}>
            <Button >Payment Now</Button>
          </Link>
        </div>
        <Heading>Total Item: {data.length}</Heading>
        <Heading>Total Price: {total}</Heading>
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
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue' onClick={() => handleDelete(el.id)}>
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
      </div>
    </div>
  )
}

export default AddtoCartpage
