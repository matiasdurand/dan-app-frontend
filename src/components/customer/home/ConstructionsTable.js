import {
  useColorModeValue,
  Flex,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Heading
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';

const ConstructionsTable = () => {
  const tableBackgroud = useColorModeValue("gray.100", "gray.700")
  const history = useHistory()
  return(

    <Flex 
    background={tableBackgroud} 
    border="1px" 
    borderColor={tableBackgroud} 
    rounded={6} 
    w="100%" 
    alignItems="center" 
    direction="row-reverse" 
    wrap="wrap"
    >

      <IconButton 
      onClick={()=>history.push("/construcciones/agregar")} 
      m={1} 
      colorScheme="teal" 
      variant="ghost" 
      aria-label="Add" 
      icon={<AddIcon/>} >
      </IconButton>

      <Heading as="h4" size="md" width="50%">Construcciones</Heading>
      
      <Table variant="simple" colorScheme="teal" size="lg">
      
        <Thead>
          <Tr>
            <Th>Descripcion</Th>
            <Th>Direccion</Th>
            <Th isNumeric>Empresa</Th>
          </Tr>
        </Thead>

        <Tbody>
          
        </Tbody>

      </Table>  

    </Flex>
  )
}
export default ConstructionsTable; 

