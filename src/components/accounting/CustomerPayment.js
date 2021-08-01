import { 
  Flex, 
  Heading,
  Table,
  Th,
  TableCaption,
  Tr,
  Tbody,
  Thead 
} from "@chakra-ui/react";
import PaymentTable from "./PaymentTable";

function CustomerPayments() {
  return (
    <Flex direction="column" alignItems="center" h="100vh" p="32px">
      <Heading size="lg" color="tomato" align="center" mb="32px">Pagos</Heading>
      <Table variant="simple" w="65%" colorScheme="blue" size="sm" mb="16px">
        <TableCaption placement="top">Pedidos pendientes de pago</TableCaption>
        <Thead>
          <Tr>
            <Th>FECHA DE ENVÍO</Th>
            <Th>ESTADO</Th>
            <Th>CONSTRUCCIÓN</Th>
            <Th>CANT. DE ÍTEMS</Th>
            <Th>TOTAL A PAGAR</Th>
          </Tr>
        </Thead>
        <Tbody>
        </Tbody>
      </Table>
      <PaymentTable></PaymentTable>
    </Flex>
  );
}

export default CustomerPayments;