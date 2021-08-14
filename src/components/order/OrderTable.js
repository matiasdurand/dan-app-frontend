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

const OrderTable = ({orders, generateOrder, options, edit, setOrderId, showAdd}) => {

  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

  const handleEditClick = (event, orderId) => {
    event.preventDefault();
    edit(orderId);
  };

  const handleRowClick = (event, orderId) => {
    event.preventDefault();
    setOrderId(orderId);
  };

  return (
    
    <Flex 
    background={tableBackgroud} 
    border="1px" 
    borderColor={tableBackgroud} 
    rounded={6} 
    w="100%"
    h="fit-content" 
    mr={4}
    boxSizing="border-box"
    wrap="wrap" 
    >

      <Flex direction="row-reverse" alignItems="center" w="100%">
        {showAdd && 
        <IconButton 
          onClick={() => generateOrder()} 
          m={1} 
          colorScheme="blue" 
          variant="ghost" 
          aria-label="Add" 
          icon={<AddIcon/>} >
        </IconButton>}

        <Heading as="h4" size="md" width="50%" mt={3}>Pedidos</Heading>
      </Flex>
      
      <Table variant="simple" colorScheme="blue" size="lg">

        <Thead>
          <Tr>
            {options && <Th>Id</Th>}
            <Th>Fecha envío</Th>
            <Th>Estado</Th>
            <Th>Costrucción</Th>
            <Th>Cant. ítems</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>

        <Tbody>
          {!options && renderBody(orders)}
          {options && renderBodyWithOptions(orders, handleEditClick, handleRowClick)}
        </Tbody>

      </Table>

    </Flex>
  )
}

function renderBody(orders) {
  return orders.map((order) => {
    return (
      <Tr key={order.id} >
        <Td>{order.shippingDate.replace("T00:00:00Z", "")}</Td>
        <Td>{order.stateDescription}</Td>
        <Td>{order.constructionDescription}</Td>
        <Td>{order.itemCount}</Td>
        <Td>{order.totalPrice}</Td>
      </Tr>
    )
  })
}

function renderBodyWithOptions(orders, handleEditClick, handleRowClick) {
  return orders.map((order) => {
    return (
      <Tr key={order.id} _hover={{ bg: "gray.600" }} onClick={(event) => handleRowClick(event, order.id)}>
        <Td>{order.id}</Td>
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

export default OrderTable;
