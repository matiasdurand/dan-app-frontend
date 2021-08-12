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
    <Flex direction="column" h="fit-content" background={formBackgroud} p={12} rounded={6} m={2}>

      <Heading nb={6}>Arma tu Pedido</Heading>

      <Flex>
        <FormControl id="date" mt={4} isRequired>
          <FormLabel>Fecha de envío</FormLabel>
          <Input defaultValue="2021-09-01" type="date" name="date" onChange={handleInputChange} variant="filled"/>
        </FormControl>

        <Flex direction="column" p={8}>

          <FormControl id="quantity" mt={6} isRequired>
              <FormLabel>Cantidad</FormLabel>
              <NumberInput defaultValue={1}  min={1} max={1000} variant="filled">
                <NumberInputField onChange={handleInputChange} />
              </NumberInput>
            </FormControl>
            
            <Button variant="outline" colorScheme="blue" mt={12} onClick={(e) => {e.preventDefault(); addItem()}}>Añadir</Button>

        </Flex>
      </Flex>

      <Flex direction="row-reverse">
        <Button mr={8} variant="solid" colorScheme="blue" onClick={(e) => {e.preventDefault(); confirm()}}>Confirmar Pedido</Button>
        <Button mr={8} variant="ghost" onClick={(e) => {e.preventDefault(); clean(true)}}>Cancelar</Button>
      </Flex>
      
    </Flex>
  );
}
export default OrderForm;