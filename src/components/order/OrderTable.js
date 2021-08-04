import { 
  useColorModeValue,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  IconButton,
  Heading
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom'

const OrdersTable = ({orders}) => {
  const tableBackgroud = useColorModeValue("gray.100", "gray.700")
  const history = useHistory();
  return (
    
    <Flex 
    background={tableBackgroud} 
    border="1px" 
    borderColor={tableBackgroud} 
    rounded={6} 
    w="100%"
    h="fit-content" 
    m={2}
    boxSizing="border-box"
    alignItems="center" 
    direction="row-reverse" 
    wrap="wrap" 
    >

      <IconButton 
      onClick={() => history.push('pedidos/agregar')} 
      m={1} 
      colorScheme="blue" 
      variant="ghost" 
      aria-label="Add" 
      icon={<AddIcon/>} >
      </IconButton>

      <Heading as="h4" size="md" width="50%">Pedidos</Heading>
      
      <Table variant="simple" colorScheme="blue" size="lg">

        <Thead>
          <Tr>
            <Th>Fecha de envío</Th>
            <Th>Estado</Th>
            <Th>Costrucción</Th>
            <Th>Cantidad de ítems</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>

        <Tbody>
          {renderBody(orders)}
        </Tbody>

      </Table>

    </Flex>
  )
}

function renderBody(orders) {
  return orders.map((order) => {
    return (
      <Tr key={order.id}>
        <Td>{order.shippingDate}</Td>
        <Td>{order.stateDescription}</Td>
        <Td>{order.constructionDescription}</Td>
        <Td>{order.itemCount}</Td>
        <Td>{order.totalPrice}</Td>
      </Tr>
    )
  })
}

export default OrdersTable;
