import {
  Stack,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Radio,
  Textarea,
  RadioGroup,
  NumberInput,
  NumberInputField,
  useColorModeValue
} from "@chakra-ui/react"
import React from 'react';

function PaymentForm() {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const [value, setValue] = React.useState("cash")

  return (
    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>
      
      <Heading nb={6}>Pagos</Heading>

      <Flex direction="column" p={8}>
        <FormControl id="cuit" mt={6} isRequired>
          <FormLabel>CUIT</FormLabel>
          <Input variant="filled" placeholder="CUIT"/>
        </FormControl>

        <FormControl id="comment" mt={4} isRequired>
          <FormLabel>Comentario</FormLabel>
          <Textarea variant="filled" placeholder="Ingresa un comentario" resize="none"/>
        </FormControl>

        <FormControl id="paymentMethod" mt={4} isRequired>
          <FormLabel>Método de Pago</FormLabel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="cash">Efectivo</Radio>
              <Radio value="transfer">Transferencia</Radio>
              <Radio value="check">Cheque</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {value === "cash" && 
        <Flex w="100%">
          <FormControl id="billNumber" mt={4} isRequired>
            <FormLabel>Código</FormLabel>
            <NumberInput variant="filled" placeholder="Código">
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </Flex>}

        {value === "transfer" && 
        <Flex w="100%">
          <FormControl id="cbuOrigin" mt={4} isRequired>
              <FormLabel>CBU Cliente</FormLabel>
              <NumberInput mr={4} variant="filled">
                <NumberInputField />
              </NumberInput>
            </FormControl>
            
            <FormControl id="code" mt={4} isRequired>
              <FormLabel>Código</FormLabel>
              <NumberInput variant="filled">
                <NumberInputField />
              </NumberInput>
            </FormControl>
        </Flex>}

        {value === "check" && 
        <Flex w="100%" wrap="wrap">
          <Flex>
            
            <FormControl id="number" mt={4} mr={4} isRequired>
              <FormLabel>Número</FormLabel>
              <NumberInput variant="filled">
                <NumberInputField />
              </NumberInput>
            </FormControl>
            
            <FormControl id="date" mt={4} isRequired>
              <FormLabel>Fecha Pago</FormLabel>
              <Input type="date" variant="filled"/>
            </FormControl>

          </Flex>
          
          <FormControl id="bank" mt={4} isRequired>
            <FormLabel>Banco</FormLabel>
            <Input width="50%" variant="filled"/>
          </FormControl>

        </Flex>}
      
      </Flex>

      <Flex direction="row-reverse">
        <Button mr={8} variant="solid" colorScheme="blue">Aceptar</Button>
        <Button mr={8} variant="ghost">Cancelar</Button>
      </Flex>
    </Flex>
  );
}

export default PaymentForm;