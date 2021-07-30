import React from 'react'
import {
  Flex,
  IconButton,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Heading
 } from '@chakra-ui/react'
 import { HamburgerIcon } from '@chakra-ui/icons';

function DrawerHome() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      
      <IconButton 
        icon={<HamburgerIcon/>} 
        size="lg"
        variant="ghost"
        ref={btnRef} 
        colorScheme="teal" 
        onClick={onOpen}>
      </IconButton>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navega</DrawerHeader>

          <DrawerBody>
            <Flex direction="column">
              <Button variant="unstyled" mt={10}>PERFIL</Button>
              <Button variant="unstyled" mt={10}>PAGOS</Button>
              <Button variant="unstyled" mt={10}>CAMIONES</Button>
              <Button variant="unstyled" mt={10}>PRODUCTOS</Button>
            </Flex>
          </DrawerBody>

          <DrawerFooter alignSelf="center">
            <Heading size="md">El mejor corralon</Heading>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default DrawerHome