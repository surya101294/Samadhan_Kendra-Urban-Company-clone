import React , {useState} from 'react'
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
import { RepeatClockIcon } from '@chakra-ui/icons';

const HairSkin = () => {
  const [data,setData]=useState([])
 const getData=()=>{    
    }

  useEffect(()=>{
    // getData()
    fetch(`http://localhost:3000/data`)
    .then((res)=> res.json())   
    .then((res)=> {
        setData(res)
        // console.log(res)
    })
    .catch((err)=> console.log(err))  
},[])
console.log(data)
 {/* <Stack gridTemplate={'repeat(3,1fr)'}> {'repeat(3,1fr)'}  }
      {/* <div key={el.image} >
      <img src={el.image} alt="" />  
      <p>{el. title}</p> 

      </div> */}
    return (
    <div>
        <Heading></Heading>
        <Grid templateColumns='repeat(auto-fill, minmax(200px, 1fr))' spacing={2} >
       {data?.map((el)=>(
<Card maxW='sm'>
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
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
     
     )
      )}
    </Grid>

    </div>
  )
}

export default HairSkin