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
import { AddIcon, EditIcon } from '@chakra-ui/icons';

const OrdersTable = ({orders, generateOrder, options, edit}) => {

  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

  const handleEditClick = (event, orderId) => {
    event.preventDefault();
    edit(orderId);
  };

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
      onClick={() => generateOrder()} 
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
          {!options && renderBody(orders)}
          {options && renderBodyWithOptions(orders, handleEditClick)}
        </Tbody>

      </Table>

    </Flex>
  )
}

function renderBody(orders) {
  return orders.map((order) => {
    return (
      <Tr key={order.id}>
        <Td>{order.shippingDate.replace("T00:00:00Z", "")}</Td>
        <Td>{order.stateDescription}</Td>
        <Td>{order.constructionDescription}</Td>
        <Td>{order.itemCount}</Td>
        <Td>{order.totalPrice}</Td>
      </Tr>
    )
  })
}

function renderBodyWithOptions(orders, handleEditClick) {
  return orders.map((order) => {
    return (
      <Tr key={order.id}>
        <Td>{order.shippingDate.replace("T00:00:00Z", "")}</Td>
        <Td>{order.stateDescription}</Td>
        <Td>{order.constructionDescription}</Td>
        <Td>{order.itemCount}</Td>
        <Td>{order.totalPrice}</Td>
        <Td>
          <IconButton
            onClick={(event) => handleEditClick(event, order.id)} 
            colorScheme="blue" 
            variant="ghost" 
            aria-label="Edit" 
            icon={<EditIcon/>}>
          </IconButton>
        </Td>
      </Tr>
    )
  })
}

export default OrdersTable;
