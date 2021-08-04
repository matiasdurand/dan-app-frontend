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

  const formBackground = useColorModeValue("gray.100", "gray.700")

  const handleInputChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name] : event.target.value
    });
  };

  return (

    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}> 

      <Heading nb={6}>Filtro</Heading>
      
      <Flex alignItems="center">
        <FormControl id="type" m={6} isRequired>
          <FormLabel>Parámetro de búsqueda</FormLabel>
          <Select name="type" onChange={handleInputChange} variant="filled">
            <option value="cuit">Cuit</option>
            <option value="businessName">Razón Social</option>
          </Select>
        </FormControl>

        <FormControl id="name" m={6} >
          <FormLabel>Buscar...</FormLabel>
          <Input name="value" onChange={handleInputChange} variant="filled" placeholder="Buscar..."></Input>
        </FormControl>

        <Button mr={8} w="20%" variant="solid" colorScheme="blue" onClick={filter}>Filtrar</Button>
      </Flex>
      
    </Flex>
  )
}
export default CustomerFilter;