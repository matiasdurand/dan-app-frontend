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
 import { useHistory } from 'react-router-dom'

function DrawerHome({employeeId}) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  const history = useHistory();

  return (
    <>
      <IconButton 
        icon={<HamburgerIcon/>} 
        size="lg"
        variant="ghost"
        ref={btnRef} 
        colorScheme="blue" 
        onClick={onOpen}>
      </IconButton>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}>

        <DrawerOverlay />

        <DrawerContent>

          <DrawerCloseButton />

          <DrawerHeader>Navega</DrawerHeader>

          <DrawerBody>
            <Flex direction="column">
              <Button onClick={() => history.push("/perfil/" + employeeId)} _hover={{ bg: "gray.600" }} variant="unstyled" mt={4}>PERFIL</Button>
              <Button onClick={() => history.push("/clientes")} _hover={{ bg: "gray.600" }} variant="unstyled" mt={4}>CLIENTES</Button>
              <Button onClick={() => history.push("/pagos")} _hover={{ bg: "gray.600" }} variant="unstyled" mt={4}>PAGOS</Button>
              <Button onClick={() => history.push("/camiones")} _hover={{ bg: "gray.600" }} variant="unstyled" mt={4}>CAMIONES</Button>
              <Button onClick={() => history.push("/productos")} _hover={{ bg: "gray.600" }} variant="unstyled" mt={4}>PRODUCTOS</Button>
              <Button onClick={() => history.push("/empleados")} _hover={{ bg: "gray.600" }} variant="unstyled" mt={4}>EMPLEADOS</Button>
              <Button onClick={() => history.push("/paquetes")} _hover={{ bg: "gray.600" }} variant="unstyled" mt={4}>PAQUETES</Button>
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

export default DrawerHome;