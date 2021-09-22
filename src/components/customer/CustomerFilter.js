import {
  Flex, 
  FormControl,
  FormLabel,
  Select,
  Heading,
  Input,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const CustomerFilter = ({filters, setFilters, filter}) => {

  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleInputChange = (event) => {
    setFilters({...filters, [event.target.name] : event.target.value });
  };

  return (
    <Flex 
      direction="column" 
      h="fit-content" 
      background={formBackground} 
      p={8} 
      rounded={6}> 

      <Heading>Filtro</Heading>
      
      <Flex alignItems="flex-end" mt={4}>

        <FormControl mr={6} isRequired>
          <FormLabel>Buscar por</FormLabel>
          <Select name="type" onChange={handleInputChange} variant="filled">
            <option value="cuit">Cuit</option>
            <option value="businessName">Razón Social</option>
          </Select>
        </FormControl>

        <FormControl mr={6}>
          <Input 
            name="value" 
            onChange={handleInputChange} 
            variant="filled" 
            placeholder="Ingrese un valor"></Input>
        </FormControl>

        <Button 
          w="25%" 
          variant="solid" 
          colorScheme="blue" 
          onClick={(e) => { e.preventDefault(); filter(); }}>
          Filtrar
        </Button>

      </Flex>
      
    </Flex>
  )
}

export default CustomerFilter;