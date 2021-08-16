import { 
  Flex,
  Table,
  Heading,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  useColorModeValue
} from "@chakra-ui/react";

function OrderItemTable({items}) {
  
  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex 
      background={tableBackgroud} 
      border="1px" 
      borderColor={tableBackgroud} 
      rounded={6} 
      w="100%"
      h="fit-content" 
      mt={4}
      boxSizing="border-box"
      align="center" 
      direction="column"
      justify="center" 
      wrap="wrap">

      <Heading as="h4" size="md" mt={4}>Detalle</Heading>

      <Table variant="simple" colorScheme="blue" size="lg">

        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Cantidad</Th>
            <Th>Subtotal</Th>
          </Tr>
        </Thead>

        <Tbody>
          {renderBody(items)}
        </Tbody>

      </Table>

    </Flex>
  );
}

function renderBody(items) {
  return items.map((item) => {
    return (
      <Tr>
        <Td>{item.productName}</Td>
        <Td>{item.quantity}</Td>
        <Td>{item.price}</Td>
      </Tr>
    )
  })
}

export default OrderItemTable;