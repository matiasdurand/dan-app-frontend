import { 
  useColorModeValue,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  IconButton,
  Heading
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom'

const OrdersTable = () => {
  const tableBackgroud = useColorModeValue("gray.100", "gray.700")
  const history = useHistory();
  return (
    
    <Flex 
      background={tableBackgroud} 
      border="1px" 
      borderColor={tableBackgroud} 
      rounded={6} w="100%" 
      alignItems="center" 
      direction="row-reverse" 
      wrap="wrap" 
      mr={1} mt={2}
      >

      <IconButton 
      onClick={() => history.push('pedidos/agregar')} 
      m={1} 
      colorScheme="teal" 
      variant="ghost" 
      aria-label="Add" 
      icon={<AddIcon/>} >
      </IconButton>

      <Heading as="h4" size="md" width="50%">Pedidos</Heading>
      
      <Table variant="simple" colorScheme="teal" size="lg">

        <Thead>
          <Tr>
            <Th>Fecha de envio</Th>
            <Th>Estado</Th>
            <Th isNumeric>Costruccion</Th>
            <Th isNumeric>Cantidad de items</Th>
            <Th isNumeric>Total</Th>
          </Tr>
        </Thead>

        <Tbody>
        
        </Tbody>

      </Table>

    </Flex>
  )
}
export default OrdersTable;
