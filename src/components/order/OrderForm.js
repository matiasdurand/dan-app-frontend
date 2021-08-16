import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Heading,
  useColorModeValue
} from "@chakra-ui/react"
import React from 'react'

const OrderForm = ({setShippingDate, setQuantity, addItem, confirm, clean}) => {

  const formBackgroud = useColorModeValue("gray.100", "gray.700");

  const handleInputChange = (event) => {
    if (event.target.name === "date") { setShippingDate(event.target.value); }
    else { setQuantity(event.target.value); }
  };

  return (
    <Flex 
      direction="column" 
      h="fit-content" 
      background={formBackgroud} 
      rounded={6}
      w="100%"
      p={12}>

      <Heading>Arma tu Pedido</Heading>

      <FormControl w="50%" mt={6} isRequired>
        <FormLabel>Fecha de envío</FormLabel>
        <Input 
          defaultValue="2021-09-01" 
          type="date" 
          name="date" 
          onChange={handleInputChange} 
          variant="filled"/>
      </FormControl>

      <Flex align="flex-end" mt={6}>
        
        <FormControl w="40%" mr={4} isRequired>
          <FormLabel>Cantidad</FormLabel>
          <NumberInput defaultValue={1}  min={1} max={1000} variant="filled">
            <NumberInputField onChange={handleInputChange}/>
          </NumberInput>
        </FormControl>
            
        <Button 
          variant="outline" 
          colorScheme="blue" 
          onClick={(e) => { e.preventDefault(); addItem(); }}>
          Añadir
        </Button>

      </Flex>

      <Flex direction="row-reverse" mt={12}>
        <Button 
          variant="solid" 
          colorScheme="blue" 
          onClick={(e) => { e.preventDefault(); confirm(); }}>
          Confirmar
        </Button>
        <Button 
          mr={8} 
          variant="ghost" 
          onClick={(e) => { e.preventDefault(); clean(true); }}>
          Cancelar
        </Button>
      </Flex>
      
    </Flex>
  );
}

export default OrderForm;