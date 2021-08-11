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

function PaymentTable({payments, customerUser}) {

  const tableBackgroud = useColorModeValue("gray.100", "gray.700");

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
    align="center" 
    direction="column"
    justify="center" 
    wrap="wrap"
    >

      <Heading as="h4" size="md" p={1}>Pagos</Heading>

      <Table variant="simple" colorScheme="blue" size="lg">
        
        <Thead>
          <Tr>
            <Th>ID PAGO</Th>
            {!customerUser && <Th>ID CLIENTE</Th>}
            <Th>FECHA</Th>
            <Th>MÉTODO DE PAGO</Th>
            <Th>COMENTARIO</Th>
          </Tr>
        </Thead>
        <Tbody>
          {renderBody(payments, customerUser)}
        </Tbody>
      </Table>

    </Flex>
  );
}

function renderBody(payments, customerUser) {
  return payments.map((payment) => {
    return (
      <Tr key={payment.id}>
        <Td>{payment.id}</Td>
        {!customerUser && <Td>{payment.customerId}</Td>}
        <Td>{payment.date.replace("T00:00:00Z", "")}</Td>
        <Td>{payment.method.type}</Td>
        <Td>{payment.method.comment}</Td>
      </Tr>
    )
  })
}

export default PaymentTable;