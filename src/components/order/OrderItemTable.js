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
  Tfoot,
  useColorModeValue
} from "@chakra-ui/react";

function OrderItemTable() {
  const tableBackgroud = useColorModeValue("gray.100", "gray.700")
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
            <Th isNumeric>ID</Th>
            <Th>PRODUCTO</Th>
            <Th isNumeric>CANTIDAD</Th>
            <Th isNumeric>SUBTOTAL</Th>
          </Tr>
        </Thead>
        <Tbody>

          
        </Tbody>
      </Table>

      <Text>Total</Text>

    </Flex>
  );
}

export default OrderItemTable;