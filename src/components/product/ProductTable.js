import { 
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody
} from "@chakra-ui/react";

function ProductTable() {
  return (
    <Table variant="simple" colorScheme="blue" size="sm" w="45%">
      <TableCaption>Productos</TableCaption>
      <Thead>
        <Tr>
          <Th>NOMBRE</Th>
          <Th>DESCRIPCIÓN</Th>
          <Th>U. MEDIDA</Th>
          <Th>PRECIO</Th>
        </Tr>
      </Thead>
      <Tbody>
      </Tbody>
    </Table>
  );
}

export default ProductTable;