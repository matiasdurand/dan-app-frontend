import { 
  Flex,
  Table,
  Heading,
  Text,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  useColorModeValue
} from "@chakra-ui/react";
import { useState } from "react";

function OrderItemTable({items}) {
  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

  const [totalPrice, setTotalPrice] = useState(0);

  return (

    <Flex background={tableBackgroud} 
    border="1px" 
    borderColor={tableBackgroud} 
    rounded={6} 
    w="100%"
    h="fit-content" 
    m={2}
    boxSizing="border-box"
    align="center" 
    direction="column"
    justify="center" 
    wrap="wrap">

      <Heading as="h4" size="md" p={1}>Detalle del Pedido</Heading>

      <Table variant="simple" colorScheme="blue" size="lg">
        <Thead>
          <Tr>
            <Th>ID PRODUCTO</Th>
            <Th>CANTIDAD</Th>
            <Th>SUBTOTAL</Th>
          </Tr>
        </Thead>
        <Tbody>
          {renderBody(items, totalPrice, setTotalPrice)}
        </Tbody>
      </Table>

      <Text>Total = {totalPrice}</Text>

    </Flex>
  );
}

function renderBody(items, totalPrice, setTotalPrice) {
  return items.map((item) => {
    setTotalPrice(totalPrice + item.price);
    return (
      <Tr>
        <Td>{item.productId}</Td>
        <Td>{item.quantity}</Td>
        <Td>{item.price}</Td>
      </Tr>
    )
  })
}

export default OrderItemTable;