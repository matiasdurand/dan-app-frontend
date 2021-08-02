import { 
  Flex,
  Table,
  Heading,
  Thead,
  Tr,
  Th,
  Tbody,
  useColorModeValue
} from "@chakra-ui/react";

function PaymentTable() {
  const tableBackgroud = useColorModeValue("gray.100", "gray.700")
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
            <Th>ID CLIENTE</Th>
            <Th>FECHA</Th>
            <Th>MÉTODO DE PAGO</Th>
          </Tr>
        </Thead>
        <Tbody>
        </Tbody>
      </Table>

    </Flex>
  );
}

export default PaymentTable;