import { 
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  IconButton
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';

const OrdersTable = () => {

  return (
    
    <Flex border="1px" rounded={6} w="100%" direction="row-reverse" wrap="wrap" mr={1} mt={2}>

      <IconButton m={1} colorScheme="teal" variant="outline" aria-label="Add" icon={<AddIcon/>} >
      </IconButton>
      
      <Table variant="striped" colorScheme="teal" size="sm">
        <TableCaption>Mis Ordenes</TableCaption>
        
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
    
      </Table>

    </Flex>
    
  )
}

export default OrdersTable;
