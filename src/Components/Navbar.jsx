import logo from "../logo/sk.jpg"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useColorMode} from "@chakra-ui/react"
// import DrawerLogin from '../Pages/DrawerLogin'
import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center, FormControl, HStack,
} from '@chakra-ui/react'
// import { useDisclosure, Button,Input } from '@chakra-ui/react'

import { PinInput, PinInputField } from '@chakra-ui/react';
import { Navigate } from "react-router-dom";
import Delhi from '../Pages/Delhi'


export default function WithSubnavigation() {
  const { isOpen1, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  // const handleLogin=()=>{  
  //   return <Navigate to={"/delhi-ncr"}/>
  // }

  return (
    <div>
    <Box>
      <Flex
        bg={useColorModeValue('black', 'gray.800')}
        color={useColorModeValue('white.200', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen1 ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')} href={'/'}>
            <img height={'30px'} width={'120px'} src={logo} alt="" />
            </Text>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            {/* colorMode theme Toggle  */}
            <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
            <Button
            as={'a'}
            fontSize={'m'}
            fontWeight={600}
            color={'white'}
            variant={'link'}
            href={'#'}>
            Blog
          </Button>
          <Button
            as={'a'}
            fontSize={'m'}
            fontWeight={600}
            color={'white'}
            variant={'link'}
            href={'#'}>
            Register As A Professional
          </Button>
          <Button
            as={'a'}
            fontSize={'m'}
            fontWeight={600}
            color={'white'}
            variant={'link'}
            // href={'/login'}
            ref={btnRef}  onClick={onOpen}
            >
            Login/Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen1} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
      
    </Box>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Continue Using the Phone Number</DrawerHeader>

          <DrawerBody>
            <Input type={'number'}  placeholder='Type here...'   />
          </DrawerBody>

          {/* <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
          Enter Your Phone Number 2
        </Center> */}
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

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={<Navigate to={"/delhi-ncr"}/>}>Continue</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}