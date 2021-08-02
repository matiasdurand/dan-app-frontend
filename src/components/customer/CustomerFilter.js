import {
  Flex, 
  FormControl,
  FormLabel,
  Select,
  Heading,
  Input,
  useColorModeValue
} from '@chakra-ui/react'

const CustomerFilter = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (

    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}> 

      <Heading nb={6}>Filtro</Heading>
      
      <Flex>
        <FormControl id="constructionType" m={6} isRequired>
          <FormLabel>Parámetro de búsqueda</FormLabel>
          <Select name="constructionType" variant="filled">
            <option value="0">Cuit</option>
            <option value="1">Razón Social</option>
          </Select>
        </FormControl>

        <FormControl id="name" m={6} >
          <FormLabel>Buscar...</FormLabel>
          <Input variant="filled" placeholder="Buscar..."></Input>
         </FormControl>

      </Flex>
      



    </Flex>




  )
}
export default CustomerFilter;