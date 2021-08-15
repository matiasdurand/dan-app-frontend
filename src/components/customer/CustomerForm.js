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

function CustomerForm({customer, setCustomer, post, goBack}) {

  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleInputChange = (event) => {
    setCustomer({...customer, [event.target.name] : event.target.value })
  };

  return (
    <Flex 
      direction="column" 
      h="fit-content" 
      background={formBackground} 
      p={10} 
      rounded={6} 
      m={2}>

      <Heading nb={6}>Cliente</Heading>

      <Flex direction="column" mt={2} p={8}>
        
        <FormControl isRequired>
          <FormLabel>Razón Social</FormLabel>
          <Input 
            name="businessName" 
            value={customer.businessName} 
            onChange={handleInputChange} 
            variant="filled"/>
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>CUIT</FormLabel>
          <Input 
            name="cuit" 
            value={customer.cuit} 
            onChange={handleInputChange} 
            variant="filled"/>
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input 
            name="email" 
            value={customer.email} 
            onChange={handleInputChange} 
            type="email" 
            variant="filled"/>
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Máximo Monto en Descubierto</FormLabel>
          <NumberInput 
            value={customer.maxCurrentAccount} 
            defaultValue={1000} 
            min={0} 
            max={100000} 
            variant="filled">
            <NumberInputField 
              name="maxCurrentAccount" 
              onChange={handleInputChange}/>  
          </NumberInput>
        </FormControl>

      </Flex>

      <Flex direction="row-reverse" mt={4}>
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
          onClick={(e) => { e.preventDefault(); goBack(); } }>
          Cancelar
        </Button>
      </Flex>
    
    </Flex>
  );
}

export default CustomerForm;