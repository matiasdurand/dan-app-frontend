import {
  Flex,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  useColorModeValue
} from "@chakra-ui/react"

function CustomerForm({customer, setCustomer}) {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setCustomer({
      ...customer,
      [event.target.name] : event.target.value
    })
  };

  return (
    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>

      <Heading nb={6}>Cliente</Heading>

      <Flex direction="column" p={8}>
        
        <FormControl id="businessName" mt={6} isRequired>
          <FormLabel>Razón Social</FormLabel>
          <Input name="businessName" value={customer.businessName} onChange={handleInputChange} variant="filled" placeholder="Razón Social"/>
        </FormControl>

        <FormControl id="cuit" mt={4} isRequired>
          <FormLabel>CUIT</FormLabel>
          <Input name="cuit" onChange={handleInputChange} variant="filled" placeholder="CUIT"/>
        </FormControl>

        <FormControl id="email" mt={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" onChange={handleInputChange} type="email" variant="filled" placeholder="Email"/>
        </FormControl>

        <FormControl id="maxCurrentAccount" mt={4} isRequired>
          <FormLabel>Máximo Monto en Descubierto</FormLabel>
          <NumberInput defaultValue={1000} min={0} max={100000} variant="filled" placeholder="Máximo Monto en Descubierto">
            <NumberInputField name="maxCurrentAccount" onChange={handleInputChange}/>  
          </NumberInput>
        </FormControl>

      </Flex>

      <Flex direction="row-reverse">
        <Button mr={8} variant="solid" colorScheme="blue">Aceptar</Button>
        <Button mr={8} variant="ghost">Cancelar</Button>
      </Flex>
    
    </Flex>
  );
}

export default CustomerForm;