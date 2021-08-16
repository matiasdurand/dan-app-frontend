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

function PaymentForm({payment, setPayment, paymentMethod, setPaymentMethod, post, clean}) {

  const formBackground = useColorModeValue("gray.100", "gray.700");

  const [value, setValue] = React.useState("cash");

  const handlePaymentInputChange = (event) => {
    setPayment({...payment, [event.target.name] : event.target.value});
  };

  const handleMethodInputChange = (event) => {
    setPaymentMethod({...paymentMethod, [event.target.name] : event.target.value});
  };

  return (
    <Flex 
      direction="column" 
      h="fit-content" 
      background={formBackground} 
      w="60%"
      p={8} 
      rounded={6} 
      m={2}>
      
      <Heading>Pagos</Heading>

      <Flex direction="column" mt={4} p={4}>

        <Flex>
          <FormControl mr={4} isRequired>
            <FormLabel>CUIT</FormLabel>
            <Input 
              value={payment.cuit} 
              name="cuit" 
              onChange={handlePaymentInputChange} 
              variant="filled"/>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Fecha Pago</FormLabel>
            <Input 
              value={payment.date} 
              name="date" 
              onChange={handlePaymentInputChange} 
              type="date" 
              variant="filled"/>
          </FormControl>
        </Flex>
        
        <FormControl mt={4} isRequired>
          <FormLabel>Comentario</FormLabel>
          <Textarea 
            value={paymentMethod.comment} 
            name="comment" 
            onChange={handleMethodInputChange} 
            variant="filled" 
            resize="none"/>
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Método de Pago</FormLabel>
          <RadioGroup 
            name="type" 
            onClick={(event) => {handleMethodInputChange(event); setValue(event.target.value); }} 
            value={value}>
            <Stack direction="row">
              <Radio value="cash">Efectivo</Radio>
              <Radio value="transfer">Transferencia</Radio>
              <Radio value="check">Cheque</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {value === "cash" && 
        <Flex w="50%" mt={4}>
          <FormControl isRequired>
            <FormLabel>Código</FormLabel>
            <NumberInput value={paymentMethod.billNumber} variant="filled">
              <NumberInputField name="billNumber" onChange={handleMethodInputChange} />
            </NumberInput>
          </FormControl>
        </Flex>}

        {value === "transfer" && 
        <Flex w="100%" mt={4}>
          <FormControl isRequired>
              <FormLabel>CBU Cliente</FormLabel>
              <NumberInput value={paymentMethod.cbuOrigin} mr={4} variant="filled">
                <NumberInputField name="cbuOrigin" onChange={handleMethodInputChange}/>
              </NumberInput>
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>Código</FormLabel>
              <NumberInput value={paymentMethod.code} variant="filled">
                <NumberInputField name="code" onChange={handleMethodInputChange}/>
              </NumberInput>
            </FormControl>
        </Flex>}

        {value === "check" && 
        <Flex w="100%" mt={4} wrap="wrap">
          <Flex>
            <FormControl mr={4} isRequired>
              <FormLabel>Número</FormLabel>
              <NumberInput value={paymentMethod.number} variant="filled">
                <NumberInputField name="number" onChange={handleMethodInputChange} />
              </NumberInput>
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>Fecha Pago</FormLabel>
              <Input name="paymentDate" onChange={handleMethodInputChange} type="date" variant="filled"/>
            </FormControl>
          </Flex>
          
          <FormControl id="bank" mt={4} isRequired>
            <FormLabel>Banco</FormLabel>
            <Input value={paymentMethod.bank} name="bank" onChange={handleMethodInputChange} width="50%" variant="filled"/>
          </FormControl>
        </Flex>}
      
      </Flex>

      <Flex direction="row-reverse" mt={8}>
        <Button 
          mr={8} 
          variant="solid" 
          colorScheme="blue" 
          onClick={(e) => { e.preventDefault(); post(); }}>
          Aceptar
        </Button>
        <Button 
          mr={8} 
          variant="ghost" 
          onClick={(e) => { e.preventDefault(); clean(); }}>
          Cancelar
        </Button>
      </Flex>
    </Flex>
  );
}

export default PaymentForm;