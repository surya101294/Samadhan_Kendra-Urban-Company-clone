/*import { Center, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';

export default function VerifyEmailForm() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          We have sent code to your email
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
          username@mail.com
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
*/
/*
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure, Button,Input } from '@chakra-ui/react'
import React from 'react'

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Enter Mobile no. to login</DrawerHeader>

          <DrawerBody>
            <input placeholder='Type Mobile number...' isRequired/>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
*/
/*

import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Navbar from "../Pages/Navbar";
import{Link as RouterLink} from "react-router-dom"


const styles={
    width:"100%",
    margin:"auto",
    border:"2px solid black",
    padding:"45px",
backgroundColor:"#36454F"
}
const btn={
    backgroundColor:"grey",
    color:"white",
    padding:"7px",
    fontSize:"19px",
    marginTop:"9px",
    borderRadius:"11px",
    marginBottom:"7px"
}
function Cart(){
    const[data,setData]=React.useState([])
    
    
    React.useEffect(()=>{
        GetData()
    },[])
    
    function GetData(){
        fetch("https://zara-mock-cw.onrender.com/cart").then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((error)=>console.log(error))
    }

    const DeleteCart=async (id)=>{
let res=await fetch(`https://zara-mock-cw.onrender.com/cart/${id}`,{
    method:'DELETE',
    headers:{
        'Content-Type':'application/json'
    }
})
// setData(res.json())
fetch("https://zara-mock-cw.onrender.com/cart").then((res)=>res.json())
.then((res)=>setData(res))
.catch((error)=>console.log(error))
    }
    let sum=0;
for(let i=0;i<data.length;i++){
    sum+=(data[i].price)
}

    return (<>
        
         <Navbar sum={sum} tota={data.length}/> 
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",backgroundColor:"black"}}>
        <RouterLink to="/checkout" > <button style={btn}>Procced Checkout</button></RouterLink>    
       <h1 style={{fontSize:"35px",backgroundColor:"black",color:"white"}}>Total Price:{"   "}{sum}</h1>
       <h1 style={{fontSize:"35px",backgroundColor:"black",color:"white"}}>Total Number Of Items:{"   "}{data.length}</h1>
       
        </div>
        <div style={styles}>
           
             
           <SimpleGrid  columns={{base:1,md:3,'2xl':4}} spacing={25}>
   {data?.map((el)=>{
   return (
   <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",borderRadius:"15px",padding:"10px",backgroundColor:"white"}} key={el.id}>
   <img  src={el.image} alt={el.cate} />
   <h3>{el.name}</h3>
   <h4>{el.price}</h4>
   <button onClick={()=>{DeleteCart(el.id)}} style={{backgroundColor:"black",color:"white",padding:"4px",borderRadius:"5px"}}>Remove</button>
   </div>
   )
   })}
   </SimpleGrid>
  
   </div>
       
  </>  
    )
}
export default Cart
*/