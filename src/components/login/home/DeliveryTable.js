import { 
  useColorModeValue,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading
} from '@chakra-ui/react'

const DeliveryTable = () => {
  const tableBackgroud = useColorModeValue("gray.100", "gray.700")
  return (
    
    <Flex background={tableBackgroud} border="1px" borderColor={tableBackgroud} rounded={6} alignItems="center" w="100%" direction="column" wrap="wrap" ml={1} mt={2}>

      <Heading as="h4" size="md" p={3.5}>Mis Envios</Heading>

      <Table variant="simple" colorScheme="teal" size="lg">

        <Thead>
          <Tr>
            <Th>Something</Th>
            <Th>Something</Th>
            <Th>Something</Th>
            <Th>Something</Th>
            <Th>Something</Th>
          </Tr>
        </Thead>

        <Tbody>
          
        </Tbody>
 
      </Table>

    </Flex>
    
  )
}

export default DeliveryTable;