import { 
  useColorModeValue,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Heading
} from '@chakra-ui/react'

const DeliveryTable = () => {
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

      <Heading as="h4" size="md" p={1}>Envios</Heading>

      <Table variant="simple" colorScheme="blue" size="lg">

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