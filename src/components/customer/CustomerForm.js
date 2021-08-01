import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react"

function CustomerForm({customer, setCustomer}) {
  
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setCustomer({
      ...customer,
      [event.target.name] : event.target.value
    })
  };

  return (
    <VStack w="40%" spacing={2}>

      <Heading as="h5" size="md" mb="16px">Datos del Cliente</Heading>

      <FormControl id="businessName" isRequired>
        <FormLabel fontSize="xs">Razón Social</FormLabel>
        <Input name="businessName" value={customer.businessName} onChange={handleInputChange} size="sm"/>
      </FormControl>

      <FormControl id="cuit" isRequired>
        <FormLabel fontSize="xs">CUIT</FormLabel>
        <Input name="cuit" onChange={handleInputChange} size="sm"/>
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel fontSize="xs">Email</FormLabel>
        <Input name="email" onChange={handleInputChange} size="sm" type="email"/>
      </FormControl>

      <FormControl id="maxCurrentAccount" isRequired>
        <FormLabel fontSize="xs">Máximo Monto en Descubierto</FormLabel>
        <NumberInput size="sm" defaultValue={1000} min={0} max={100000}>
          <NumberInputField name="maxCurrentAccount" onChange={handleInputChange}/>  
        </NumberInput>
      </FormControl>
    
    </VStack>
  );
}

export default CustomerForm;