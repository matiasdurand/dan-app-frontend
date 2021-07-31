import { 
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody
} from "@chakra-ui/react";

function PaymentTable() {
  return (
    <Table variant="simple" w="50%" colorScheme="blue" size="sm">
      <TableCaption placement="top">Registro de Pagos</TableCaption>
      <Thead>
        <Tr>
          <Th>ID PAGO</Th>
          <Th>ID CLIENTE</Th>
          <Th>FECHA</Th>
          <Th>MÉTODO DE PAGO</Th>
        </Tr>
      </Thead>
      <Tbody>
      </Tbody>
    </Table>
  );
}

export default PaymentTable;