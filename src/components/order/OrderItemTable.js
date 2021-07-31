import { 
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot
} from "@chakra-ui/react";

function OrderItemTable() {
  return (
    <Table variant="striped" colorScheme="teal" size="sm" w="45%">
      <TableCaption>Detalle del Pedido</TableCaption>
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
      <Tfoot>
        <Tr>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td>TOTAL = </Td>
        </Tr>
      </Tfoot>
    </Table>
  );
}

export default OrderItemTable;